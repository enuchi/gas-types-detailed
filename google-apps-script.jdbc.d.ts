// Type definitions for Google Apps Script 2020-01-26
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
       *
       *
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String)
       * @param url A database URL of the form jdbc:google:mysql:subname.
       */
      getCloudSqlConnection(url: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given Google Cloud SQL URL.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String,Object)
       * @param url A database URL of the form jdbc:google:mysql:subname.
       * @param info Optional JavaScript object specifying advanced parameters as defined below.
       */
      getCloudSqlConnection(url: string, info: object): JdbcConnection;

      /**
       * Attempts to establish a connection to the given Google Cloud SQL URL.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getCloudSqlConnection(String,String,String)
       * @param url A database URL of the form jdbc:google:mysql:subname.
       * @param userName The username to pass to the database.
       * @param password The user's password.
       */
      getCloudSqlConnection(url: string, userName: string, password: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database URL.
       *
       *
       *     var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name');
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       */
      getConnection(url: string): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database URL.
       *
       *
       *     var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name',
       *                                   {user: 'username', password: 'password'});
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String,Object)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       * @param info Optional JavaScript object specifying advanced parameters as defined below.
       */
      getConnection(url: string, info: object): JdbcConnection;

      /**
       * Attempts to establish a connection to the given database using a username and password.
       *
       *
       *     var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name',
       *                                   'username', 'password');
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#getConnection(String,String,String)
       * @param url A database URL of the form jdbc:subprotocol:subname.
       * @param userName The username to pass to the database.
       * @param password The user's password.
       */
      getConnection(url: string, userName: string, password: string): JdbcConnection;

      /**
       * Create a date from milliseconds since epoch.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newDate(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newDate(milliseconds: Integer): JdbcDate;

      /**
       * Create a time from milliseconds since epoch.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newTime(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newTime(milliseconds: Integer): JdbcTime;

      /**
       * Create a timestamp from milliseconds since epoch.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#newTimestamp(Integer)
       * @param milliseconds Milliseconds since epoch.
       */
      newTimestamp(milliseconds: Integer): JdbcTimestamp;

      /**
       * Create a date by parsing the SQL date string.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#parseDate(String)
       * @param date A string containing a SQL date string.
       */
      parseDate(date: string): JdbcDate;

      /**
       * Create a time by parsing the SQL time string.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc#parseTime(String)
       * @param time A string containing a SQL time string.
       */
      parseTime(time: string): JdbcTime;

      /**
       * Create a timestamp by parsing the SQL timestamp string.
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
       * For documentation of this method, see
       * java.sql.Array#free().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#free()
       */
      free(): void;

      /**
       * For documentation of this method, see
       * java.sql.Array#getArray()
       *
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getArray()
       */
      getArray(): object;

      /**
       * For documentation of this method, see
       * java.sql.Array#getArray(long, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getArray(Integer,Integer)
       * @param index The array index of the first element to retrieve, where the first element has an index of 1.
       * @param count The number of successive SQL array elements to retrieve.
       */
      getArray(index: Integer, count: Integer): object;

      /**
       * For documentation of this method, see
       * java.sql.Array#getBaseType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getBaseType()
       */
      getBaseType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Array#getBaseTypeName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getBaseTypeName()
       */
      getBaseTypeName(): string;

      /**
       * For documentation of this method, see
       * java.sql.Array#getResultSet().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-array#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Array#getResultSet(long, int).
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
       * For documentation of this method, see
       * java.sql.Blob#free().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#free()
       */
      free(): void;

      /**
       * Gets the content of this JdbcBlob as an Apps Script blob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getAppsScriptBlob()
       */
      getAppsScriptBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * For documentation of this method, see
       * java.sql.Blob#getBytes(long, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#getBytes(Integer,Integer)
       * @param position The ordinal position of the first byte in the blob value to be extracted; the first byte is at position 1.
       * @param length The number of consecutive bytes to copy; the value for length must be zero or greater.
       */
      getBytes(position: Integer, length: Integer): Byte[];

      /**
       * For documentation of this method, see
       * java.sql.Blob#length().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#length()
       */
      length(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Blob#position(byte[], long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#position(Byte,Integer)
       * @param pattern The byte array to search for.
       * @param start The position in the blob value where to beging searching; the first position is 1.
       */
      position(pattern: Byte[], start: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Blob#position(blob, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#position(JdbcBlob,Integer)
       * @param pattern The JdbcBlob indicating the value to search for.
       * @param start The position in the blob value where to beging searching; the first position is 1.
       */
      position(pattern: JdbcBlob, start: Integer): Integer;

      /**
       * Convenience method for writing a JdbcBlob to this blob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,BlobSource)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param blobSource The source of data to write to this blob.
       */
      setBytes(position: Integer, blobSource: Base.BlobSource): Integer;

      /**
       * Convenience method for writing a JdbcBlob to this blob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,BlobSource,Integer,Integer)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param blobSource The source of data to write to this blob.
       * @param offset The offset into the provided byte array at which to start reading bytes to set.
       * @param length The number of bytes to write to the blob.
       */
      setBytes(position: Integer, blobSource: Base.BlobSource, offset: Integer, length: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Blob#setBytes(long, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,Byte)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param bytes The array of bytes to write to this blob.
       */
      setBytes(position: Integer, bytes: Byte[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Blob#setBytes(long, byte[], int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-blob#setBytes(Integer,Byte,Integer,Integer)
       * @param position The position in the blob at which to start writing; the first position is 1.
       * @param bytes The array of bytes to write to this blob.
       * @param offset The offset into the provided byte array at which to start reading bytes to set.
       * @param length The number of bytes to write to the blob.
       */
      setBytes(position: Integer, bytes: Byte[], offset: Integer, length: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Blob#truncate(long).
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
       * For documentation of this method, see
       * java.sql.PreparedStatement#addBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#addBatch()
       */
      addBatch(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#addBatch(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#cancel().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#clearParameters().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearParameters()
       */
      clearParameters(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#close().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#execute().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute()
       */
      execute(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#executeQuery().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeQuery()
       */
      executeQuery(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeQuery(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#executeUpdate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate()
       */
      executeUpdate(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getArray(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getArray(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getArray(parameterIndex: Integer): JdbcArray;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getArray(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getArray(String)
       * @param parameterName The name of the parameter.
       */
      getArray(parameterName: string): JdbcArray;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBigDecimal(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBigDecimal(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBigDecimal(parameterIndex: Integer): BigNumber;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBigDecimal(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBigDecimal(String)
       * @param parameterName The name of the parameter.
       */
      getBigDecimal(parameterName: string): BigNumber;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBlob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBlob(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBlob(parameterIndex: Integer): JdbcBlob;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBlob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBlob(String)
       * @param parameterName The name of the parameter.
       */
      getBlob(parameterName: string): JdbcBlob;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBoolean(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBoolean(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBoolean(parameterIndex: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBoolean(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBoolean(String)
       * @param parameterName The name of the parameter.
       */
      getBoolean(parameterName: string): boolean;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getByte(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getByte(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getByte(parameterIndex: Integer): Byte;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getByte(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getByte(String)
       * @param parameterName The name of the parameter.
       */
      getByte(parameterName: string): Byte;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBytes(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBytes(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getBytes(parameterIndex: Integer): Byte[];

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getBytes(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getBytes(String)
       * @param parameterName The name of the parameter.
       */
      getBytes(parameterName: string): Byte[];

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getClob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getClob(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getClob(parameterIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getClob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getClob(String)
       * @param parameterName The name of the parameter.
       */
      getClob(parameterName: string): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getConnection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDate(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getDate(parameterIndex: Integer): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDate(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(parameterIndex: Integer, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDate(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(String)
       * @param parameterName The name of the parameter.
       */
      getDate(parameterName: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDate(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDate(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(parameterName: string, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDouble(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDouble(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getDouble(parameterIndex: Integer): number;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getDouble(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getDouble(String)
       * @param parameterName The name of the parameter.
       */
      getDouble(parameterName: string): number;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchDirection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getFloat(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFloat(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getFloat(parameterIndex: Integer): number;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getFloat(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getFloat(String)
       * @param parameterName The name of the parameter.
       */
      getFloat(parameterName: string): number;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getGeneratedKeys().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getInt(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getInt(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getInt(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getInt(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getInt(String)
       * @param parameterName The name of the parameter.
       */
      getInt(parameterName: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getLong(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getLong(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getLong(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getLong(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getLong(String)
       * @param parameterName The name of the parameter.
       */
      getLong(parameterName: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxFieldSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxRows().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#getMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getNClob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNClob(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getNClob(parameterIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getNClob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNClob(String)
       * @param parameterName The name of the parameter.
       */
      getNClob(parameterName: string): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getNString(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNString(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getNString(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getNString(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getNString(String)
       * @param parameterName The name of the parameter.
       */
      getNString(parameterName: string): string;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getObject(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getObject(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getObject(parameterIndex: Integer): object;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getObject(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getObject(String)
       * @param parameterName The name of the parameter.
       */
      getObject(parameterName: string): object;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#getParameterMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getParameterMetaData()
       */
      getParameterMetaData(): JdbcParameterMetaData;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getQueryTimeout().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getRef(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRef(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getRef(parameterIndex: Integer): JdbcRef;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getRef(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRef(String)
       * @param parameterName The name of the parameter.
       */
      getRef(parameterName: string): JdbcRef;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSet().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetConcurrency().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getRowId(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRowId(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getRowId(parameterIndex: Integer): JdbcRowId;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getRowId(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getRowId(String)
       * @param parameterName The name of the parameter.
       */
      getRowId(parameterName: string): JdbcRowId;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getSQLXML(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getSQLXML(Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       */
      getSQLXML(parameterIndex: Integer): JdbcSQLXML;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getSQLXML(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getSQLXML(String)
       * @param parameterName The name of the parameter.
       */
      getSQLXML(parameterName: string): JdbcSQLXML;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getShort(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getShort(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getShort(parameterIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getShort(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getShort(String)
       * @param parameterName The name of the parameter.
       */
      getShort(parameterName: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getString(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getString(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getString(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getString(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getString(String)
       * @param parameterName The name of the parameter.
       */
      getString(parameterName: string): string;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTime(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getTime(parameterIndex: Integer): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTime(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(parameterIndex: Integer, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTime(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(String)
       * @param parameterName The name of the parameter.
       */
      getTime(parameterName: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTime(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTime(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(parameterName: string, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTimestamp(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getTimestamp(parameterIndex: Integer): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTimestamp(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(parameterIndex: Integer, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTimestamp(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(String)
       * @param parameterName The name of the parameter.
       */
      getTimestamp(parameterName: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getTimestamp(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getTimestamp(String,String)
       * @param parameterName The name of the parameter.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(parameterName: string, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getURL(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getURL(Integer)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       */
      getURL(parameterIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#getURL(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getURL(String)
       * @param parameterName The name of the parameter.
       */
      getURL(parameterName: string): string;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getUpdateCount().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see
       * java.sql.Statement#isClosed().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#isPoolable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The JDBC type code to register. If the parameter is of JDBC type NUMERIC or DECIMAL, use registerOutParameter(parameterIndex, sqlType, scale) instead.
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(int, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer,Integer)
       * @param parameterIndex An index indicating which paramater to register (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The JDBC type code to register.
       * @param scale The desired number of digits to the right of the decimal point (must be zero or greater).
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(int, int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the second is 2, and so on).
       * @param sqlType A type code value.
       * @param typeName The fully-qualified name of an SQL structured type.
       */
      registerOutParameter(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       */
      registerOutParameter(parameterName: string, sqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(String, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer,Integer)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       * @param scale The desired number of digits to the right of the decimal point, which must be zero or greater.
       */
      registerOutParameter(parameterName: string, sqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#registerOutParameter(String, int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#registerOutParameter(String,Integer,String)
       * @param parameterName The name of the parameter to be registered.
       * @param sqlType A type code value.
       * @param typeName The fully-qualified name of an SQL structured type.
       */
      registerOutParameter(parameterName: string, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setArray(int, Array).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setArray(Integer,JdbcArray)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setArray(parameterIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBigDecimal(int, BigDecimal).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBigDecimal(Integer,BigNumber)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setBigDecimal(String, BigDecimal).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBigDecimal(String,BigNumber)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterName: string, x: BigNumber): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBlob(int, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBlob(Integer,JdbcBlob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBlob(parameterIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setBlob(String, Blob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBlob(String,JdbcBlob)
       * @param parameterName The name of the parameter to set.
       * @param x A blob that maps to an SQL BLOB value.
       */
      setBlob(parameterName: string, x: JdbcBlob): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBoolean(int, boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBoolean(Integer,Boolean)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBoolean(parameterIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setBoolean(String, boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBoolean(String,Boolean)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBoolean(parameterName: string, x: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setByte(int, byte).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setByte(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setByte(parameterIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setByte(String, byte).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setByte(String,Byte)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setByte(parameterName: string, x: Byte): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBytes(int, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBytes(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBytes(parameterIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setBytes(String, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setBytes(String,Byte)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setBytes(parameterName: string, x: Byte[]): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setClob(int, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setBlob(String, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setClob(String,JdbcClob)
       * @param parameterName The name of the parameter to set.
       * @param x A clob that maps to an SQL CLOB value.
       */
      setClob(parameterName: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setCursorName(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDate(int, Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(Integer,JdbcDate)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDate(parameterIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDate(int, Date, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(Integer,JdbcDate,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterIndex: Integer, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setDate(String, Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(String,JdbcDate)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setDate(parameterName: string, x: JdbcDate): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setDate(String, Date, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDate(String,JdbcDate,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterName: string, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDouble(int, double).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDouble(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDouble(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setDouble(String, double).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setDouble(String,Number)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setDouble(parameterName: string, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setEscapeProcessing(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchDirection(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setFloat(int, float).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFloat(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setFloat(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setFloat(String, float).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setFloat(String,Number)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setFloat(parameterName: string, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setInt(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setInt(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setInt(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setInt(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setInt(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setInt(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setLong(int, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setLong(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setLong(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setLong(String, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setLong(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setLong(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxFieldSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxRows(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNClob(int, NClob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setNClob(String, NClob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNClob(String,JdbcClob)
       * @param parameterName The name of the parameter to set.
       * @param value The parameter value to set.
       */
      setNClob(parameterName: string, value: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setNString(String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNString(String,String)
       * @param parameterName The name of the parameter to set.
       * @param value The parameter value to set.
       */
      setNString(parameterName: string, value: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNull(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       */
      setNull(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNull(int, int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       * @param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter isn't a user-defined type or REF.
       */
      setNull(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setNull(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param sqlType The SQL  type code.
       */
      setNull(parameterName: string, sqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setNull(String, int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setNull(String,Integer,String)
       * @param parameterName The name of the parameter to set.
       * @param sqlType The SQL type.
       * @param typeName The fully-qualified name of an SQL user-defined type; ignored if the parameter is not a user-defined type or SQL REF value.
       */
      setNull(parameterName: string, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object)
       * @param index The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       */
      setObject(index: Integer, x: object): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database.
       */
      setObject(parameterIndex: Integer, x: object, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(Integer,Object,Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database. The scale argument may further qualify this type.
       * @param scaleOrLength The number of digits after the decimal for DECIMAL or NUMERIC types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      setObject(parameterIndex: Integer, x: object, targetSqlType: Integer, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setObject(String, Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       */
      setObject(parameterName: string, x: object): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setObject(String, Object, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       * @param targetSqlType The SQL type sent to the database.
       */
      setObject(parameterName: string, x: object, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setObject(String, Object, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setObject(String,Object,Integer,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The object containing the value to set.
       * @param targetSqlType The SQL type sent to the database. The scale parameter may further qualify this type.
       * @param scale The number of digits after the decimal point for DECIMAL and NUMERIC types. Ignored for all other types.
       */
      setObject(parameterName: string, x: object, targetSqlType: Integer, scale: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setPoolable(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setQueryTimeout(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setQueryTimeout(Integer)
       * @param seconds The new query timeout in seconds; a value of 0 indicates no timeout.
       */
      setQueryTimeout(seconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setRef(int, Ref).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRef(Integer,JdbcRef)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The SQL REF value to set.
       */
      setRef(parameterIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setRowId(int, RowId).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRowId(Integer,JdbcRowId)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setRowId(parameterIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setRowId(String, RowId).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setRowId(String,JdbcRowId)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setRowId(parameterName: string, x: JdbcRowId): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setSQLXML(int, SQLXML).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setSQLXML(Integer,JdbcSQLXML)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setSQLXML(parameterIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setSQLXML(String, SQLXML).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setSQLXML(String,JdbcSQLXML)
       * @param parameterName The name of the parameter to set.
       * @param xmlObject A SQLXML object that maps to an SQL XML value.
       */
      setSQLXML(parameterName: string, xmlObject: JdbcSQLXML): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setShort(int, short).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setShort(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setShort(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setShort(String, short).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setShort(String,Integer)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setShort(parameterName: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setString(String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setString(String,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setString(parameterName: string, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTime(int, Time).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(Integer,JdbcTime)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTime(parameterIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTime(int, Time, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(Integer,JdbcTime,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterIndex: Integer, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setTime(String, Time).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(String,JdbcTime)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setTime(parameterName: string, x: JdbcTime): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setTime(String, Time, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTime(String,JdbcTime,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterName: string, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTimestamp(int, Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(Integer,JdbcTimestamp)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(Integer,JdbcTimestamp,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setTimestamp(String, Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(String,JdbcTimestamp)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       */
      setTimestamp(parameterName: string, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setTimestamp(String, Timestamp, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setTimestamp(String,JdbcTimestamp,String)
       * @param parameterName The name of the parameter to set.
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterName: string, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setURL(int, URL).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setURL(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setURL(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#setURL(String, URL).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement#setURL(String,String)
       * @param parameterName The name of the parameter to set.
       * @param val The parameter value to set.
       */
      setURL(parameterName: string, val: string): void;

      /**
       * For documentation of this method, see
       * java.sql.CallableStatement#wasNull().
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
       * For documentation of this method, see
       * java.sql.Clob#truncate(long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#free()
       */
      free(): void;

      /**
       * Gets the content of this JdbcClob as an Apps Script blob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getAppsScriptBlob()
       */
      getAppsScriptBlob(): Base.Blob;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * For documentation of this method, see
       * java.sql.Clob#getSubString(long, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#getSubString(Integer,Integer)
       * @param position The index of the first character of the substring to extract. The first character is at index 1.
       * @param length The number of consecutive characters to copy (must be 0 or greater).
       */
      getSubString(position: Integer, length: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.Clob#length().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#length()
       */
      length(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Clob#position(Clob, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#position(JdbcClob,Integer)
       * @param search The clob object to search for.
       * @param start The position at which to begin searching; the first position is 1.
       */
      position(search: JdbcClob, start: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Clob#position(String, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#position(String,Integer)
       * @param search The substring to search for.
       * @param start The position at which to begin searching; the first position is 1.
       */
      position(search: string, start: Integer): Integer;

      /**
       * Convenience method for writing a JdbcClob to a clob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,BlobSource)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param blobSource The blob source to write.
       */
      setString(position: Integer, blobSource: Base.BlobSource): Integer;

      /**
       * Convenience method for writing a JdbcClob to a clob.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,BlobSource,Integer,Integer)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param blobSource The blob source to write.
       * @param offset The offset into the provided string where reading characters to write starts.
       * @param len The number of characters to write.
       */
      setString(position: Integer, blobSource: Base.BlobSource, offset: Integer, len: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Clob#setString(long, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,String)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param value The string to write.
       */
      setString(position: Integer, value: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Clob#setString(long, String, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-clob#setString(Integer,String,Integer,Integer)
       * @param position The position at which writing to the clob starts; the first position is 1.
       * @param value The string to write.
       * @param offset The offset into the provided string where reading characters to write starts.
       * @param len The number of characters to write.
       */
      setString(position: Integer, value: string, offset: Integer, len: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Clob#truncate(long).
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
       * For documentation of this method, see
       * java.sql.Connection#clearWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * Release this connection's database and all associated resources.
       *
       *
       *     var conn = Jdbc.getConnection("jdbc:mysql://<host>:<port>/<instance>", "user", "password");
       *     conn.close();
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#close()
       */
      close(): void;

      /**
       * Makes all pending changes permanent, releases database locks held by this JdbcConnection.
       *
       *
       *     var conn = Jdbc.getConnection("jdbc:mysql://<host>:<port>/<instance>", "user", "password");
       *     conn.setAutoCommit(false);
       *     var stmt = conn.prepareStatement("insert into person (lname,fname) values (?,?)");
       *     var start = new Date();
       *     for (var i = 0; i < 5000; i++) {
       *       // Objects are accessed using 1-based indexing
       *       stmt.setObject(1, 'firstName' + i);
       *       stmt.setObject(2, 'lastName' + i);
       *       stmt.addBatch();
       *     }
       *     var res = stmt.executeBatch();
       *     conn.commit(); // When this returns, this is when changes are actually committed
       *     conn.close();
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#commit()
       */
      commit(): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#createArrayOf(String, Object[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createArrayOf(String,Object)
       * @param typeName The database-specific SQL name of the array elemnents' type. Options include built-in types, user-defined types, or standard SQL types supported by the database.
       * @param elements The elements to populate in the returned object.
       */
      createArrayOf(typeName: string, elements: object[]): JdbcArray;

      /**
       * Constructs a JdbcBlob instance. See also
       * java.sql.Connection#createBlob().
       *
       *
       * The object returned initially contains no data. You can use the setBytes methods of
       * JdbcBlob to set the data it should contain. The blob used here is not the same as the
       * blob created with Utilities.newBlob(data). To convert
       * between the two formats, use the defined getBytes() and setBytes() methods.
       * Alternatively, both JdbcBlob and JdbcClob provide a getAppsScriptBlob()
       * convenience method for converting to a format that can be used by Apps Script.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createBlob()
       */
      createBlob(): JdbcBlob;

      /**
       * For documentation of this method, see
       * java.sql.Connection#createClob().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createClob()
       */
      createClob(): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.Connection#createNClob().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createNClob()
       */
      createNClob(): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.Connection#createSQLXML().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createSQLXML()
       */
      createSQLXML(): JdbcSQLXML;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also
       * java.sql.Connection#createStatement().
       *
       *
       *     // This sample code assumes authentication is off
       *     var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
       *     var stmt = conn.createStatement();
       *
       *     stmt.setMaxRows(100);
       *     var rs = stmt.execute("select * from person");
       *
       *     while(rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement()
       */
      createStatement(): JdbcStatement;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also
       * java.sql.Connection#createStatement(int, int).
       *
       *
       * This version allows the result set type and concurrency to be overridden.
       *
       *
       *     // This sample code assumes authentication is off
       *     // For more information about this method, see documentation here:
       *     //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
       *     var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
       *     var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
       *                                     Jdbc.ResultSet.CONCUR_READ_ONLY);
       *
       *     stmt.setMaxRows(100);
       *     var rs = stmt.execute("select * from person");
       *
       *     while(rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement(Integer,Integer)
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      createStatement(resultSetType: Integer, resultSetConcurrency: Integer): JdbcStatement;

      /**
       * Creates a JdbcStatement object for sending SQL statements to the database. See also
       * java.sql.Connection#createStatement(int, int, int).
       *
       *
       * This version allows the result set type, concurrency and holdability to be overridden.
       *
       *
       *     // This sample code assumes authentication is off
       *     // For more information about this method, see documentation here:
       *     //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
       *     var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
       *     var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
       *                                     Jdbc.ResultSet.CONCUR_READ_ONLY,
       *                                     Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT);
       *
       *     stmt.setMaxRows(100);
       *     var rs = stmt.execute("select * from person");
       *
       *     while(rs.next()) {
       *       // Do something
       *     }
       *
       *     rs.close();
       *     stmt.close();
       *     conn.close();
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStatement(Integer,Integer,Integer)
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      createStatement(resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#createStruct(String, Object[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#createStruct(String,Object)
       * @param typeName The database-specific SQL name of the array elemnents' type. Options include built-in types, user-defined types, or standard SQL types supported by the database.
       * @param attributes The attributes that populate the returned object.
       */
      createStruct(typeName: string, attributes: object[]): JdbcStruct;

      /**
       * For documentation of this method, see
       * java.sql.Connection#getAutoCommit().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getAutoCommit()
       */
      getAutoCommit(): boolean;

      /**
       * or documentation of this method, see
       * java.sql.Connection#getCatalog().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getCatalog()
       */
      getCatalog(): string;

      /**
       * For documentation of this method, see
       * java.sql.Connection#getHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getHoldability()
       */
      getHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Connection#getMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getMetaData()
       */
      getMetaData(): JdbcDatabaseMetaData;

      /**
       * For documentation of this method, see
       * java.sql.Connection#getTransactionIsolation().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getTransactionIsolation()
       */
      getTransactionIsolation(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Connection#getWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see
       * java.sql.Connection#isClosed().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Connection#isReadOnly().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isReadOnly()
       */
      isReadOnly(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Connection#isValid(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#isValid(Integer)
       * @param timeout The time in seconds to wait for the validation operation to complete. A value of 0 indicates no timeout is applied.
       */
      isValid(timeout: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Connection#nativeSQL(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#nativeSQL(String)
       * @param sql An SQL statement that may contain one more more '?' placeholders.
       */
      nativeSQL(sql: string): string;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareCall(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       */
      prepareCall(sql: string): JdbcCallableStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareCall(String, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      prepareCall(sql: string, resultSetType: Integer, resultSetConcurrency: Integer): JdbcCallableStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareCall(String, int, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareCall(String,Integer,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' placeholders, typically provided using JDBC call escape syntax.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      prepareCall(sql: string, resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcCallableStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       */
      prepareStatement(sql: string): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are returned; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       */
      prepareStatement(sql: string, autoGeneratedKeys: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      prepareStatement(sql: string, resultSetType: Integer, resultSetConcurrency: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String, int, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatement(String,Integer,Integer,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param resultSetType A result set type; one of Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE.
       * @param resultSetConcurrency A concurrency type; either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       * @param resultSetHoldability A holdability setting; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      prepareStatement(sql: string, resultSetType: Integer, resultSetConcurrency: Integer, resultSetHoldability: Integer): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String, int[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatementByIndex(String,Integer)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param indices The column indices of columns that are returned from the inserted row or rows.
       */
      prepareStatementByIndex(sql: string, indices: Integer[]): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#prepareStatement(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#prepareStatementByName(String,String)
       * @param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
       * @param columnNames The column names that specify which columns the method should return from the inserted row or rows.
       */
      prepareStatementByName(sql: string, columnNames: string[]): JdbcPreparedStatement;

      /**
       * For documentation of this method, see
       * java.sql.Connection#releaseSavepoint(Savepoint).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#releaseSavepoint(JdbcSavepoint)
       * @param savepoint The save point to remove.
       */
      releaseSavepoint(savepoint: JdbcSavepoint): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#rollback().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#rollback()
       */
      rollback(): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#rollback(Savepoint).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#rollback(JdbcSavepoint)
       * @param savepoint The save point to rollback to.
       */
      rollback(savepoint: JdbcSavepoint): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setAutoCommit(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setAutoCommit(Boolean)
       * @param autoCommit If true, auto-commit mode is enabled; false disables.
       */
      setAutoCommit(autoCommit: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setCatalog(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setCatalog(String)
       * @param catalog The name of a catalog (the subspace in the connection's database) in which to work.
       */
      setCatalog(catalog: string): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setHoldability(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setHoldability(Integer)
       * @param holdability The default holdability of JdbcResultSet objects created with this connection; either Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      setHoldability(holdability: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setReadOnly(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setReadOnly(Boolean)
       * @param readOnly If true, read-only mode is enabled; false disables.
       */
      setReadOnly(readOnly: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setSavepoint().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setSavepoint()
       */
      setSavepoint(): JdbcSavepoint;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setSavepoint(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#setSavepoint(String)
       * @param name The name of the created save point.
       */
      setSavepoint(name: string): JdbcSavepoint;

      /**
       * For documentation of this method, see
       * java.sql.Connection#setTransactionIsolation(int).
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
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#allProceduresAreCallable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#allProceduresAreCallable()
       */
      allProceduresAreCallable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#allTablesAreSelectable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#allTablesAreSelectable()
       */
      allTablesAreSelectable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#autoCommitFailureClosesAllResultSets()
       */
      autoCommitFailureClosesAllResultSets(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#dataDefinitionCausesTransactionCommit()
       */
      dataDefinitionCausesTransactionCommit(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#dataDefinitionIgnoredInTransactions()
       */
      dataDefinitionIgnoredInTransactions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#deletesAreDetected(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#deletesAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      deletesAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#doesMaxRowSizeIncludeBlobs()
       */
      doesMaxRowSizeIncludeBlobs(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getAttributes(String, String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getAttributes(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param typeNamePattern The user-defined type name pattern; it must match the type name as it is stored in the database.
       * @param attributeNamePattern The attribute name pattern; it must match the attribute name as it is declared in the database.
       */
      getAttributes(catalog: string, schemaPattern: string, typeNamePattern: string, attributeNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)
       *       .
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getBestRowIdentifier(String,String,String,Integer,Boolean)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param scope The scope of interest, using the same values as present in the SCOPE column description column.
       * @param nullable If true, include columns that are nullable; otherwise do not.
       */
      getBestRowIdentifier(catalog: string, schema: string, table: string, scope: Integer, nullable: boolean): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getCatalogSeparator().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogSeparator()
       */
      getCatalogSeparator(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getCatalogTerm().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogTerm()
       */
      getCatalogTerm(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getCatalogs().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getCatalogs()
       */
      getCatalogs(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getClientInfoProperties().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getClientInfoProperties()
       */
      getClientInfoProperties(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)
       *    .
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getColumnPrivileges(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The name of the schema to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getColumnPrivileges(catalog: string, schema: string, table: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getColumns(String, String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getColumns(catalog: string, schemaPattern: string, tableNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getConnection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getCrossReference(String, String, String,
       *      String, String, String).
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
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDatabaseMajorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseMajorVersion()
       */
      getDatabaseMajorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDatabaseMinorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseMinorVersion()
       */
      getDatabaseMinorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDatabaseProductName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseProductName()
       */
      getDatabaseProductName(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDatabaseProductVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDatabaseProductVersion()
       */
      getDatabaseProductVersion(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDefaultTransactionIsolation().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDefaultTransactionIsolation()
       */
      getDefaultTransactionIsolation(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDriverMajorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverMajorVersion()
       */
      getDriverMajorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDriverMinorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverMinorVersion()
       */
      getDriverMinorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDriverName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverName()
       */
      getDriverName(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getDriverVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getDriverVersion()
       */
      getDriverVersion(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getImportedKeys(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getExportedKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getExportedKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getExtraNameCharacters().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getExtraNameCharacters()
       */
      getExtraNameCharacters(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getFunctionColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param functionNamePattern The function pattern, which match the function name as it is stored in the database.
       * @param columnNamePattern The parameter name pattern, which must match the parameter or column name as it is stored in the database.
       */
      getFunctionColumns(catalog: string, schemaPattern: string, functionNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getFunctions(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getFunctions(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param functionNamePattern The function pattern, which must match the function name as it is stored in the database.
       */
      getFunctions(catalog: string, schemaPattern: string, functionNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getIdentifierQuoteString().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getIdentifierQuoteString()
       */
      getIdentifierQuoteString(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getImportedKeys(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getImportedKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getImportedKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)
       *       .
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getIndexInfo(String,String,String,Boolean,Boolean)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       * @param unique If true, the method only return indices for unique values; otherwise it returns indices whether the values are unique or not.
       * @param approximate If true, the result is allowed to reflect approximate or out-of-data values; otherwise result accuracy is requested.
       */
      getIndexInfo(catalog: string, schema: string, table: string, unique: boolean, approximate: boolean): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getJDBCMajorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getJDBCMajorVersion()
       */
      getJDBCMajorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getJDBCMinorVersion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getJDBCMinorVersion()
       */
      getJDBCMinorVersion(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxBinaryLiteralLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxBinaryLiteralLength()
       */
      getMaxBinaryLiteralLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxCatalogNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCatalogNameLength()
       */
      getMaxCatalogNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxCharLiteralLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCharLiteralLength()
       */
      getMaxCharLiteralLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnNameLength()
       */
      getMaxColumnNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnsInGroupBy().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInGroupBy()
       */
      getMaxColumnsInGroupBy(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnsInIndex().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInIndex()
       */
      getMaxColumnsInIndex(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnsInOrderBy().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInOrderBy()
       */
      getMaxColumnsInOrderBy(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnsInSelect().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInSelect()
       */
      getMaxColumnsInSelect(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxColumnsInTable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxColumnsInTable()
       */
      getMaxColumnsInTable(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxConnections().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxConnections()
       */
      getMaxConnections(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxCursorNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxCursorNameLength()
       */
      getMaxCursorNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxIndexLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxIndexLength()
       */
      getMaxIndexLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxProcedureNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxProcedureNameLength()
       */
      getMaxProcedureNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxRowSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxRowSize()
       */
      getMaxRowSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxSchemaNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxSchemaNameLength()
       */
      getMaxSchemaNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxStatementLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxStatementLength()
       */
      getMaxStatementLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxStatements().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxStatements()
       */
      getMaxStatements(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxTableNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxTableNameLength()
       */
      getMaxTableNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxTablesInSelect().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxTablesInSelect()
       */
      getMaxTablesInSelect(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getMaxUserNameLength().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getMaxUserNameLength()
       */
      getMaxUserNameLength(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getNumericFunctions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getNumericFunctions()
       */
      getNumericFunctions(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getPrimaryKeys(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getPrimaryKeys(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)
       *     .
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedureColumns(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param procedureNamePattern The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database.
       * @param columnNamePattern The column name pattern to filter the search by. It must match the column name as it is stored in the database.
       */
      getProcedureColumns(catalog: string, schemaPattern: string, procedureNamePattern: string, columnNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getProcedureTerm().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedureTerm()
       */
      getProcedureTerm(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getProcedures(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getProcedures(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param procedureNamePattern The procedure name pattern to filter the search by. It must match the procedure name as it is stored in the database.
       */
      getProcedures(catalog: string, schemaPattern: string, procedureNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getResultSetHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getRowIdLifetime().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getRowIdLifetime()
       */
      getRowIdLifetime(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSQLKeywords().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSQLKeywords()
       */
      getSQLKeywords(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSQLStateType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSQLStateType()
       */
      getSQLStateType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSchemaTerm().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemaTerm()
       */
      getSchemaTerm(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSchemas().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemas()
       */
      getSchemas(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSchemas().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSchemas(String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       */
      getSchemas(catalog: string, schemaPattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSearchStringEscape().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSearchStringEscape()
       */
      getSearchStringEscape(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getStringFunctions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getStringFunctions()
       */
      getStringFunctions(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSuperTables(String, String,String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSuperTables(String,String,String)
       * @param catalog The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema.
       * @param tableNamePattern The table name pattern; may be a fully qualified name.
       */
      getSuperTables(catalog: string, schemaPattern: string, tableNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSuperTypes(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSuperTypes(String,String,String)
       * @param catalog The catalog name as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used in the selection criteria.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema.
       * @param typeNamePattern The user-defined type name pattern; may be a fully qualified name.
       */
      getSuperTypes(catalog: string, schemaPattern: string, typeNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getSystemFunctions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getSystemFunctions()
       */
      getSystemFunctions(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getTablePrivileges(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTablePrivileges(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       */
      getTablePrivileges(catalog: string, schemaPattern: string, tableNamePattern: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getTableTypes().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTableTypes()
       */
      getTableTypes(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getTables(String, String, String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTables(String,String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param tableNamePattern The table name pattern to filter the search by. It must match the table name as it is stored in the database.
       * @param types A list of type types to return, each of which must be on the list that getTableTypes() returns. Passing null indictates that all table types are returned.
       */
      getTables(catalog: string, schemaPattern: string, tableNamePattern: string, types: string[]): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getTimeDateFunctions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTimeDateFunctions()
       */
      getTimeDateFunctions(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getTypeInfo().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getTypeInfo()
       */
      getTypeInfo(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getUDTs(String, String, String, int[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getUDTs(String,String,String,Integer)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schemaPattern The schema name pattern to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param typeNamePattern The type name pattern to filter the search by; may be a fully qualified name.
       * @param types A list of user-defined types (JAVA_OBJECT, STRUCT, or DISTINCT) to include. Passing null indictates that all types are returned.
       */
      getUDTs(catalog: string, schemaPattern: string, typeNamePattern: string, types: Integer[]): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getURL().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getURL()
       */
      getURL(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getUserName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getUserName()
       */
      getUserName(): string;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#getVersionColumns(String, String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#getVersionColumns(String,String,String)
       * @param catalog The catalog name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a catalog. Passing null incidates the catalog name isn't used to narrow the search.
       * @param schema The schema name to filter the search by, as it appears in the database. Passing an empty string retrieves those procedures without a schema. Passing null incidates the schema name isn't used to narrow the search.
       * @param table The table name. It must match the table name as it is stored in the database.
       */
      getVersionColumns(catalog: string, schema: string, table: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#insertsAreDetected(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#insertsAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      insertsAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#isCatalogAtStart().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#isCatalogAtStart()
       */
      isCatalogAtStart(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#isReadOnly().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#isReadOnly()
       */
      isReadOnly(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#locatorsUpdateCopy().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#locatorsUpdateCopy()
       */
      locatorsUpdateCopy(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#nullPlusNonNullIsNull().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullPlusNonNullIsNull()
       */
      nullPlusNonNullIsNull(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#nullsAreSortedAtEnd().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedAtEnd()
       */
      nullsAreSortedAtEnd(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#nullsAreSortedAtStart().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedAtStart()
       */
      nullsAreSortedAtStart(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#nullsAreSortedHigh().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedHigh()
       */
      nullsAreSortedHigh(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#nullsAreSortedLow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#nullsAreSortedLow()
       */
      nullsAreSortedLow(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#othersDeletesAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersDeletesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersDeletesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#othersInsertsAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersInsertsAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersInsertsAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#othersUpdatesAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#othersUpdatesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      othersUpdatesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#ownDeletesAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownDeletesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownDeletesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#ownInsertsAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownInsertsAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownInsertsAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#ownUpdatesAreVisible(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#ownUpdatesAreVisible(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      ownUpdatesAreVisible(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesLowerCaseIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesLowerCaseIdentifiers()
       */
      storesLowerCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesLowerCaseQuotedIdentifiers()
       */
      storesLowerCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesMixedCaseIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesMixedCaseIdentifiers()
       */
      storesMixedCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesMixedCaseQuotedIdentifiers()
       */
      storesMixedCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesUpperCaseIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesUpperCaseIdentifiers()
       */
      storesUpperCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#storesUpperCaseQuotedIdentifiers()
       */
      storesUpperCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92EntryLevelSQL()
       */
      supportsANSI92EntryLevelSQL(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsANSI92FullSQL().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92FullSQL()
       */
      supportsANSI92FullSQL(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsANSI92IntermediateSQL()
       */
      supportsANSI92IntermediateSQL(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsAlterTableWithAddColumn()
       */
      supportsAlterTableWithAddColumn(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsAlterTableWithDropColumn()
       */
      supportsAlterTableWithDropColumn(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsBatchUpdates().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsBatchUpdates()
       */
      supportsBatchUpdates(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInDataManipulation()
       */
      supportsCatalogsInDataManipulation(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInIndexDefinitions()
       */
      supportsCatalogsInIndexDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInPrivilegeDefinitions()
       */
      supportsCatalogsInPrivilegeDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInProcedureCalls()
       */
      supportsCatalogsInProcedureCalls(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCatalogsInTableDefinitions()
       */
      supportsCatalogsInTableDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsColumnAliasing().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsColumnAliasing()
       */
      supportsColumnAliasing(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsConvert().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsConvert()
       */
      supportsConvert(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsConvert(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsConvert(Integer,Integer)
       * @param fromType The  type to convert from.
       * @param toType The  type to convert to.
       */
      supportsConvert(fromType: Integer, toType: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCoreSQLGrammar().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCoreSQLGrammar()
       */
      supportsCoreSQLGrammar(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsCorrelatedSubqueries().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsCorrelatedSubqueries()
       */
      supportsCorrelatedSubqueries(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()
       * .
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDataDefinitionAndDataManipulationTransactions()
       */
      supportsDataDefinitionAndDataManipulationTransactions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDataManipulationTransactionsOnly()
       */
      supportsDataManipulationTransactionsOnly(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsDifferentTableCorrelationNames()
       */
      supportsDifferentTableCorrelationNames(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsExpressionsInOrderBy().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsExpressionsInOrderBy()
       */
      supportsExpressionsInOrderBy(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsExtendedSQLGrammar().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsExtendedSQLGrammar()
       */
      supportsExtendedSQLGrammar(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsFullOuterJoins().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsFullOuterJoins()
       */
      supportsFullOuterJoins(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsGetGeneratedKeys().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGetGeneratedKeys()
       */
      supportsGetGeneratedKeys(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsGroupBy().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupBy()
       */
      supportsGroupBy(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsGroupByBeyondSelect().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupByBeyondSelect()
       */
      supportsGroupByBeyondSelect(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsGroupByUnrelated().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsGroupByUnrelated()
       */
      supportsGroupByUnrelated(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsIntegrityEnhancementFacility()
       */
      supportsIntegrityEnhancementFacility(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsLikeEscapeClause().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsLikeEscapeClause()
       */
      supportsLikeEscapeClause(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsLimitedOuterJoins().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsLimitedOuterJoins()
       */
      supportsLimitedOuterJoins(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMinimumSQLGrammar().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMinimumSQLGrammar()
       */
      supportsMinimumSQLGrammar(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMixedCaseIdentifiers()
       */
      supportsMixedCaseIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMixedCaseQuotedIdentifiers()
       */
      supportsMixedCaseQuotedIdentifiers(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMultipleOpenResults().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleOpenResults()
       */
      supportsMultipleOpenResults(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMultipleResultSets().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleResultSets()
       */
      supportsMultipleResultSets(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsMultipleTransactions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsMultipleTransactions()
       */
      supportsMultipleTransactions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsNamedParameters().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsNamedParameters()
       */
      supportsNamedParameters(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsNonNullableColumns().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsNonNullableColumns()
       */
      supportsNonNullableColumns(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenCursorsAcrossCommit()
       */
      supportsOpenCursorsAcrossCommit(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenCursorsAcrossRollback()
       */
      supportsOpenCursorsAcrossRollback(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenStatementsAcrossCommit()
       */
      supportsOpenStatementsAcrossCommit(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOpenStatementsAcrossRollback()
       */
      supportsOpenStatementsAcrossRollback(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOrderByUnrelated().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOrderByUnrelated()
       */
      supportsOrderByUnrelated(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsOuterJoins().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsOuterJoins()
       */
      supportsOuterJoins(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsPositionedDelete().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsPositionedDelete()
       */
      supportsPositionedDelete(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsPositionedUpdate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsPositionedUpdate()
       */
      supportsPositionedUpdate(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetConcurrency(Integer,Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       * @param concurrency The concurrency type, which is either Jdbc.ResultSet.CONCUR_READ_ONLY or Jdbc.ResultSet.CONCUR_UPDATABLE.
       */
      supportsResultSetConcurrency(type: Integer, concurrency: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsResultSetHoldability(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetHoldability(Integer)
       * @param holdability A holdability constant to check; one of Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT or Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT.
       */
      supportsResultSetHoldability(holdability: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsResultSetType(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsResultSetType(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      supportsResultSetType(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSavepoints().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSavepoints()
       */
      supportsSavepoints(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSchemasInDataManipulation().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInDataManipulation()
       */
      supportsSchemasInDataManipulation(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInIndexDefinitions()
       */
      supportsSchemasInIndexDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInPrivilegeDefinitions()
       */
      supportsSchemasInPrivilegeDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInProcedureCalls()
       */
      supportsSchemasInProcedureCalls(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSchemasInTableDefinitions()
       */
      supportsSchemasInTableDefinitions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSelectForUpdate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSelectForUpdate()
       */
      supportsSelectForUpdate(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsStatementPooling().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStatementPooling()
       */
      supportsStatementPooling(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStoredFunctionsUsingCallSyntax()
       */
      supportsStoredFunctionsUsingCallSyntax(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsStoredProcedures().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsStoredProcedures()
       */
      supportsStoredProcedures(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSubqueriesInComparisons().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInComparisons()
       */
      supportsSubqueriesInComparisons(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSubqueriesInExists().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInExists()
       */
      supportsSubqueriesInExists(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSubqueriesInIns().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInIns()
       */
      supportsSubqueriesInIns(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsSubqueriesInQuantifieds()
       */
      supportsSubqueriesInQuantifieds(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsTableCorrelationNames().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTableCorrelationNames()
       */
      supportsTableCorrelationNames(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTransactionIsolationLevel(Integer)
       * @param level The transaction isolation level to determine the support of. This must be one of Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED, Jdbc.Connection.TRANSACTION_READ_COMMITTED, Jdbc.Connection.TRANSACTION_REPEATABLE_READ, Jdbc.Connection.TRANSACTION_SERIALIZABLE, or Jdbc.Connection.TRANSACTION_NONE.
       */
      supportsTransactionIsolationLevel(level: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsTransactions().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsTransactions()
       */
      supportsTransactions(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsUnion().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsUnion()
       */
      supportsUnion(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#supportsUnionAll().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#supportsUnionAll()
       */
      supportsUnionAll(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#updatesAreDetected(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#updatesAreDetected(Integer)
       * @param type The result set type, which is Jdbc.ResultSet.TYPE_FORWARD_ONLY, Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE, or Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE.
       */
      updatesAreDetected(type: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#usesLocalFilePerTable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data#usesLocalFilePerTable()
       */
      usesLocalFilePerTable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.DatabaseMetaData#usesLocalFiles().
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
       * For documentation of this method, see
       * java.sql.Date#after(date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#after(JdbcDate)
       * @param when A date to compare to.
       */
      after(when: JdbcDate): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Date#before(date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#before(JdbcDate)
       * @param when A date to compare to.
       */
      before(when: JdbcDate): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Date#getDate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getDate()
       */
      getDate(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getMonth().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getMonth()
       */
      getMonth(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getTime().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getYear().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#getYear()
       */
      getYear(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#setDate(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setDate(Integer)
       * @param date The day of the month to set. The value is between 1 and 31, modified as needed. For example, if the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days.
       */
      setDate(date: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setMonth(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setMonth(Integer)
       * @param month The month value to set. The value returned is between 0 and 11, with the value 0 representing January.
       */
      setMonth(month: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setTime(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-date#setTime(Integer)
       * @param milliseconds The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to exceed the milliseconds representation for the year 8099. A negative number indicates the number of milliseconds before January 1, 1970, 00:00:00 GMT.
       */
      setTime(milliseconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setYear(int).
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
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getParameterClassName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterClassName(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterClassName(param: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getParameterCount().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterCount()
       */
      getParameterCount(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getParameterMode(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterMode(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterMode(param: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getParameterType(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterType(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterType(param: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getParameterTypeName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getParameterTypeName(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getParameterTypeName(param: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getPrecision(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getPrecision(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getPrecision(param: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#getScale(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#getScale(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      getScale(param: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#isNullable(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data#isNullable(Integer)
       * @param param The index of the parameter to examine. The first parameter has an index of 1.
       */
      isNullable(param: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ParameterMetaData#isSigned(int).
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
       * For documentation of this method, see
       * java.sql.PreparedStatement#addBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#addBatch()
       */
      addBatch(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#addBatch(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#cancel().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#clearParameters().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearParameters()
       */
      clearParameters(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#close().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#execute().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute()
       */
      execute(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#executeQuery().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeQuery()
       */
      executeQuery(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeQuery(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#executeUpdate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate()
       */
      executeUpdate(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getConnection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchDirection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getGeneratedKeys().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxFieldSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxRows().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#getMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#getParameterMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getParameterMetaData()
       */
      getParameterMetaData(): JdbcParameterMetaData;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getQueryTimeout().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSet().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetConcurrency().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getUpdateCount().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see
       * java.sql.Statement#isClosed().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#isPoolable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setArray(int, Array).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setArray(Integer,JdbcArray)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setArray(parameterIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBigDecimal(int, BigDecimal).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBigDecimal(Integer,BigNumber)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBigDecimal(parameterIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBlob(int, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBlob(Integer,JdbcBlob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBlob(parameterIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBoolean(int, boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBoolean(Integer,Boolean)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBoolean(parameterIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setByte(int, byte).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setByte(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setByte(parameterIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setBytes(int, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setBytes(Integer,Byte)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setBytes(parameterIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setClob(int, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setCursorName(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDate(int, Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDate(Integer,JdbcDate)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDate(parameterIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDate(int, Date, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDate(Integer,JdbcDate,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setDate(parameterIndex: Integer, x: JdbcDate, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setDouble(int, double).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setDouble(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setDouble(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setEscapeProcessing(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchDirection(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setFloat(int, float).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setFloat(Integer,Number)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setFloat(parameterIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setInt(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setInt(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setInt(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setLong(int, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setLong(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setLong(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxFieldSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxRows(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNClob(int, NClob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNClob(Integer,JdbcClob)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNClob(parameterIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setNString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNull(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNull(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       */
      setNull(parameterIndex: Integer, sqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setNull(int, int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setNull(Integer,Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param sqlType The SQL type of the specified parameter.
       * @param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter isn't a user-defined type or REF.
       */
      setNull(parameterIndex: Integer, sqlType: Integer, typeName: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object)
       * @param index The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       */
      setObject(index: Integer, x: object): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database.
       */
      setObject(parameterIndex: Integer, x: object, targetSqlType: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setObject(int, Object, int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setObject(Integer,Object,Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The object containing the value to set the parameter to.
       * @param targetSqlType The SQL type to send to the database. The scale argument may further qualify this type.
       * @param scaleOrLength The number of digits after the decimal for DECIMAL or NUMERIC types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      setObject(parameterIndex: Integer, x: object, targetSqlType: Integer, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setPoolable(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setQueryTimeout(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setQueryTimeout(Integer)
       * @param seconds The new query timeout in seconds; a value of 0 indicates no timeout.
       */
      setQueryTimeout(seconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setRef(int, Ref).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setRef(Integer,JdbcRef)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The SQL REF value to set.
       */
      setRef(parameterIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setRowId(int, RowId).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setRowId(Integer,JdbcRowId)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setRowId(parameterIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setSQLXML(int, SQLXML).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setSQLXML(Integer,JdbcSQLXML)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setSQLXML(parameterIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setShort(int, short).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setShort(Integer,Integer)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setShort(parameterIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setString(Integer,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setString(parameterIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTime(int, Time).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTime(Integer,JdbcTime)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTime(parameterIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTime(int, Time, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTime(Integer,JdbcTime,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTime(parameterIndex: Integer, x: JdbcTime, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTimestamp(int, Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTimestamp(Integer,JdbcTimestamp)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement#setTimestamp(Integer,JdbcTimestamp,String)
       * @param parameterIndex The index of the parameter to set (the first parameter is 1, the second is 2, and so on).
       * @param x The parameter value to set.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      setTimestamp(parameterIndex: Integer, x: JdbcTimestamp, timeZone: string): void;

      /**
       * For documentation of this method, see
       * java.sql.PreparedStatement#setURL(int, URL).
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
       * For documentation of this method, see
       * java.sql.Ref#getBaseTypeName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#getBaseTypeName()
       */
      getBaseTypeName(): string;

      /**
       * For documentation of this method, see
       * java.sql.Ref#getObject().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#getObject()
       */
      getObject(): object;

      /**
       * For documentation of this method, see
       * java.sql.Ref#setObject(Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-ref#setObject(Object)
       * @param object The object to set as the refernence target.
       */
      setObject(object: object): void;
    }
    /**
     * A JDBC ResultSet. For documentation of this class, see java.sql.ResultSet
     * .
     */
    interface JdbcResultSet {

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#absolute(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#absolute(Integer)
       * @param row The number of the row to which the cursor moves to. A positive number indicates the row number counting from the start of the result set, while a negative number indicates the counting from the end of the result set.
       */
      absolute(row: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#afterLast().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#afterLast()
       */
      afterLast(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#beforeFirst().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#beforeFirst()
       */
      beforeFirst(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#cancelRowUpdates().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#cancelRowUpdates()
       */
      cancelRowUpdates(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#clearWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#close().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#close()
       */
      close(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#deleteRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#deleteRow()
       */
      deleteRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#findColumn(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#findColumn(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      findColumn(columnLabel: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#first().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#first()
       */
      first(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getArray(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getArray(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getArray(columnIndex: Integer): JdbcArray;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getArray(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getArray(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getArray(columnLabel: string): JdbcArray;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBigDecimal(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBigDecimal(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getBigDecimal(columnIndex: Integer): BigNumber;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBigDecimal(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBigDecimal(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBigDecimal(columnLabel: string): BigNumber;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBlob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBlob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getBlob(columnIndex: Integer): JdbcBlob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBlob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBlob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBlob(columnLabel: string): JdbcBlob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBoolean(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBoolean(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getBoolean(columnIndex: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBoolean(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBoolean(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBoolean(columnLabel: string): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getByte(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getByte(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getByte(columnIndex: Integer): Byte;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getByte(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getByte(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getByte(columnLabel: string): Byte;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBytes(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBytes(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getBytes(columnIndex: Integer): Byte[];

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getBytes(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getBytes(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getBytes(columnLabel: string): Byte[];

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getClob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getClob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getClob(columnIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getClob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getClob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getClob(columnLabel: string): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getConcurrency().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getConcurrency()
       */
      getConcurrency(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getCursorName().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getCursorName()
       */
      getCursorName(): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDate(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getDate(columnIndex: Integer): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDate(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(columnIndex: Integer, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDate(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getDate(columnLabel: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDate(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDate(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getDate(columnLabel: string, timeZone: string): JdbcDate;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDouble(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDouble(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getDouble(columnIndex: Integer): number;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getDouble(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getDouble(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getDouble(columnLabel: string): number;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getFetchDirection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getFetchSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getFloat(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFloat(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getFloat(columnIndex: Integer): number;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getFloat(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getFloat(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getFloat(columnLabel: string): number;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getHoldability()
       */
      getHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getInt(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getInt(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getInt(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getInt(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getInt(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getInt(columnLabel: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getLong(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getLong(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getLong(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getLong(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getLong(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getLong(columnLabel: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getMetaData().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getMetaData()
       */
      getMetaData(): JdbcResultSetMetaData;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getNClob(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNClob(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getNClob(columnIndex: Integer): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getNClob(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNClob(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getNClob(columnLabel: string): JdbcClob;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getNString(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNString(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getNString(columnIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getNString(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getNString(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getNString(columnLabel: string): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getObject(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getObject(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getObject(columnIndex: Integer): object;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getObject(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getObject(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getObject(columnLabel: string): object;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getRef(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRef(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getRef(columnIndex: Integer): JdbcRef;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getRef(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRef(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getRef(columnLabel: string): JdbcRef;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRow()
       */
      getRow(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getRowId(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRowId(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getRowId(columnIndex: Integer): JdbcRowId;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getRowId(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getRowId(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getRowId(columnLabel: string): JdbcRowId;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getSQLXML(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getSQLXML(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getSQLXML(columnIndex: Integer): JdbcSQLXML;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getSQLXML(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getSQLXML(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getSQLXML(columnLabel: string): JdbcSQLXML;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getShort(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getShort(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getShort(columnIndex: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getShort(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getShort(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getShort(columnLabel: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getStatement().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getStatement()
       */
      getStatement(): JdbcStatement;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getString(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getString(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getString(columnIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getString(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getString(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getString(columnLabel: string): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTime(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getTime(columnIndex: Integer): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTime(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(columnIndex: Integer, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTime(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getTime(columnLabel: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTime(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTime(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTime(columnLabel: string, timeZone: string): JdbcTime;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTimestamp(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(Integer)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       */
      getTimestamp(columnIndex: Integer): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTimestamp(int, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(Integer,String)
       * @param columnIndex The index of the column to retrieve (the first column is 1, the second is 2, and so on).
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(columnIndex: Integer, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTimestamp(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getTimestamp(columnLabel: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getTimestamp(String, Calendar).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getTimestamp(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param timeZone A time zone string used to construct  java.lang.Calendar instance, which in turn is used to build the date. Several formats of time zone strings are recognized: short IDs (such as PST, EST, and GMT), long IDs (such as US/Pacific and America/Los_Angeles), and offsets (such as GMT+6:30).
       */
      getTimestamp(columnLabel: string, timeZone: string): JdbcTimestamp;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getType()
       */
      getType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getURL(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getURL(Integer)
       * @param columnIndex The index of the column to retrieve the data from (the first column is 1, the second is 2, and so on).
       */
      getURL(columnIndex: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#getURL(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getURL(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      getURL(columnLabel: string): string;

      /**
       * Returns the current set of warnings reported by the driver.
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#insertRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#insertRow()
       */
      insertRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#isAfterLast().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isAfterLast()
       */
      isAfterLast(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#isBeforeFirst().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isBeforeFirst()
       */
      isBeforeFirst(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#isClosed().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#isFirst().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isFirst()
       */
      isFirst(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#isLast().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#isLast()
       */
      isLast(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#first().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#last()
       */
      last(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#moveToCurrentRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#moveToCurrentRow()
       */
      moveToCurrentRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#moveToInsertRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#moveToInsertRow()
       */
      moveToInsertRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#next().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#next()
       */
      next(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#previous().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#previous()
       */
      previous(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#refreshRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#refreshRow()
       */
      refreshRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#relative(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#relative(Integer)
       * @param rows The number row steps to move the cursor. A positive number moves the cursor forward, while a negative number moves the cursor backward.
       */
      relative(rows: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#rowDeleted().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowDeleted()
       */
      rowDeleted(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#rowInserted().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowInserted()
       */
      rowInserted(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#rowUpdated().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#rowUpdated()
       */
      rowUpdated(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#setFetchDirection(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#setFetchSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateArray(int, Array).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateArray(Integer,JdbcArray)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateArray(columnIndex: Integer, x: JdbcArray): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateArray(String, Array).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateArray(String,JdbcArray)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateArray(columnLabel: string, x: JdbcArray): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBigDecimal(int, BigDecimal).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBigDecimal(Integer,BigNumber)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBigDecimal(columnIndex: Integer, x: BigNumber): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBigDecimal(String, BigDecimal).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBigDecimal(String,BigNumber)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBigDecimal(columnLabel: string, x: BigNumber): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBlob(int, Blob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBlob(Integer,JdbcBlob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBlob(columnIndex: Integer, x: JdbcBlob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRef(String, Blob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBlob(String,JdbcBlob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBlob(columnLabel: string, x: JdbcBlob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBoolean(int, boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBoolean(Integer,Boolean)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBoolean(columnIndex: Integer, x: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBoolean(String, boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBoolean(String,Boolean)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBoolean(columnLabel: string, x: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateByte(int, byte).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateByte(Integer,Byte)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateByte(columnIndex: Integer, x: Byte): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateByte(String, byte).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateByte(String,Byte)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateByte(columnLabel: string, x: Byte): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBytes(int, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBytes(Integer,Byte)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateBytes(columnIndex: Integer, x: Byte[]): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateBytes(String, byte[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateBytes(String,Byte)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateBytes(columnLabel: string, x: Byte[]): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateClob(int, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateClob(Integer,JdbcClob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateClob(columnIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateClob(String, Clob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateClob(String,JdbcClob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateClob(columnLabel: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateDate(int, Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDate(Integer,JdbcDate)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateDate(columnIndex: Integer, x: JdbcDate): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateDate(String, Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDate(String,JdbcDate)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateDate(columnLabel: string, x: JdbcDate): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateDouble(int, double).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDouble(Integer,Number)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateDouble(columnIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateDouble(String, double).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateDouble(String,Number)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateDouble(columnLabel: string, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateFloat(int, float).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateFloat(Integer,Number)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateFloat(columnIndex: Integer, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateFloat(String, float).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateFloat(String,Number)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateFloat(columnLabel: string, x: number): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateInt(int, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateInt(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateInt(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateInt(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateInt(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateInt(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateLong(int, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateLong(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateLong(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateLong(String, long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateLong(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateLong(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNClob(int, NClob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNClob(Integer,JdbcClob)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateNClob(columnIndex: Integer, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNClob(String, NClob).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNClob(String,JdbcClob)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateNClob(columnLabel: string, x: JdbcClob): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNString(Integer,String)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateNString(columnIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNString(String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNString(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateNString(columnLabel: string, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNull(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNull(Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       */
      updateNull(columnIndex: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateNull(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateNull(String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       */
      updateNull(columnLabel: string): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateObject(int, Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(Integer,Object)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateObject(columnIndex: Integer, x: object): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateObject(int, Object, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(Integer,Object,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       * @param scaleOrLength The number of digits after the decimal for BigDecimal types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      updateObject(columnIndex: Integer, x: object, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateObject(String, Object).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(String,Object)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateObject(columnLabel: string, x: object): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateObject(String, Object, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateObject(String,Object,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       * @param scaleOrLength The number of digits after the decimal for BigDecimal types, or the length of data for InputStream or Reader types. Ignored for all other types.
       */
      updateObject(columnLabel: string, x: object, scaleOrLength: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRef(int, Ref).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRef(Integer,JdbcRef)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateRef(columnIndex: Integer, x: JdbcRef): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRef(String, Ref).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRef(String,JdbcRef)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateRef(columnLabel: string, x: JdbcRef): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRow().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRow()
       */
      updateRow(): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRowId(int, RowId).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRowId(Integer,JdbcRowId)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateRowId(columnIndex: Integer, x: JdbcRowId): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateRowId(String, RowId).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateRowId(String,JdbcRowId)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateRowId(columnLabel: string, x: JdbcRowId): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateSQLXML(int, SQLXML).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateSQLXML(Integer,JdbcSQLXML)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateSQLXML(columnIndex: Integer, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateSQLXML(String, SQLXML).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateSQLXML(String,JdbcSQLXML)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateSQLXML(columnLabel: string, x: JdbcSQLXML): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateShort(int, short).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateShort(Integer,Integer)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateShort(columnIndex: Integer, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateShort(String, short).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateShort(String,Integer)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateShort(columnLabel: string, x: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateString(int, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateString(Integer,String)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateString(columnIndex: Integer, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateString(String, String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateString(String,String)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateString(columnLabel: string, x: string): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateTime(int, Time).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTime(Integer,JdbcTime)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateTime(columnIndex: Integer, x: JdbcTime): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateTime(String, Time).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTime(String,JdbcTime)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateTime(columnLabel: string, x: JdbcTime): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateTimestamp(int, Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTimestamp(Integer,JdbcTimestamp)
       * @param columnIndex The index of the column to update (the first column is 1, the second is 2, and so on).
       * @param x The new column value.
       */
      updateTimestamp(columnIndex: Integer, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#updateTimestamp(String, Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#updateTimestamp(String,JdbcTimestamp)
       * @param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause wasn't specified, then the label is the name of the column.
       * @param x The new column value.
       */
      updateTimestamp(columnLabel: string, x: JdbcTimestamp): void;

      /**
       * For documentation of this method, see
       * java.sql.ResultSet#wasNull().
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
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getCatalogName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getCatalogName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getCatalogName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnClassName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnClassName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnClassName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnCount().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnCount()
       */
      getColumnCount(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnDisplaySize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnDisplaySize(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnDisplaySize(column: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnLabel(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnLabel(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnLabel(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnType(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnType(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnType(column: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getColumnTypeName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getColumnTypeName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getColumnTypeName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getPrecision(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getPrecision(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getPrecision(column: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getScale(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getScale(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getScale(column: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getSchemaName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getSchemaName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getSchemaName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#getTableName(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#getTableName(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      getTableName(column: Integer): string;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isAutoIncrement(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isAutoIncrement(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isAutoIncrement(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isCaseSensitive(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isCaseSensitive(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isCaseSensitive(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isCurrency(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isCurrency(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isCurrency(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isDefinitelyWritable(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isDefinitelyWritable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isDefinitelyWritable(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isNullable(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isNullable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isNullable(column: Integer): Integer;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isReadOnly(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isReadOnly(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isReadOnly(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isSearchable(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isSearchable(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isSearchable(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isSigned(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data#isSigned(Integer)
       * @param column The index of the column to examine (the first column is 1, the second is 2, and so on).
       */
      isSigned(column: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.ResultSetMetaData#isWritable(int).
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
       * For documentation of this method, see
       * java.sql.RowId#getBytes().
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
       * For documentation of this method, see
       * java.sql.SQLXML#free().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml#free()
       */
      free(): void;

      /**
       * For documentation of this method, see
       * java.sql.SQLXML#getString().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml#getString()
       */
      getString(): string;

      /**
       * For documentation of this method, see
       * java.sql.SQLXML#setString(String).
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
       * For documentation of this method, see
       * java.sql.Savepoint#getSavepointId().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-savepoint#getSavepointId()
       */
      getSavepointId(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Savepoint#getSavepointName().
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
       * For documentation of this method, see
       * java.sql.Statement#addBatch(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#addBatch(String)
       * @param sql The SQL command to add to this statement, typically an SQL INSERT or UPDATE.
       */
      addBatch(sql: string): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#cancel().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#cancel()
       */
      cancel(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#clearBatch()
       */
      clearBatch(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#clearWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#clearWarnings()
       */
      clearWarnings(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#close().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#close()
       */
      close(): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String)
       * @param sql The SQL statement to execute.
       */
      execute(sql: string): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,Integer)
       * @param sql The SQL statement to execute.
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL statement to execute.
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#execute(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#execute(String,String)
       * @param sql The SQL statement to execute.
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      execute(sql: string, columnNames: string[]): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeBatch().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeBatch()
       */
      executeBatch(): Integer[];

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeQuery(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeQuery(String)
       * @param sql The SQL statement to execute, typically a static SELECT.
       */
      executeQuery(sql: string): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       */
      executeUpdate(sql: string): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,Integer)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available for future retrieval; either Jdbc.Statement.RETURN_GENERATED_KEYS or Jdbc.Statement.NO_GENERATED_KEYS.
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnIndexes The column indices in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, autoGeneratedKeys: Integer, sql_: string, columnIndexes: Integer[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#executeUpdate(String, String[]).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#executeUpdate(String,String)
       * @param sql The SQL Data Manipulation Language statement to execute (such as INSERT, UPDATE, or DELETE), or else a statement that returns nothing (such as a DDL statement).
       * @param columnNames The names of columns in the whose auto-generated keys are made available for future retrieval.
       */
      executeUpdate(sql: string, columnNames: string[]): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getConnection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getConnection()
       */
      getConnection(): JdbcConnection;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchDirection().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getFetchDirection()
       */
      getFetchDirection(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getFetchSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getFetchSize()
       */
      getFetchSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getGeneratedKeys().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getGeneratedKeys()
       */
      getGeneratedKeys(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxFieldSize().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMaxFieldSize()
       */
      getMaxFieldSize(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMaxRows().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMaxRows()
       */
      getMaxRows(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMoreResults()
       */
      getMoreResults(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getMoreResults(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getMoreResults(Integer)
       * @param current A flag that indicates what happens to current result sets when retrieved. This value is one of Jdbc.Statement.CLOSE_CURRENT_RESULT, Jdbc.Statement.KEEP_CURRENT_RESULT, or Jdbc.Statement.CLOSE_ALL_RESULTS.
       */
      getMoreResults(current: Integer): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getQueryTimeout().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getQueryTimeout()
       */
      getQueryTimeout(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSet().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSet()
       */
      getResultSet(): JdbcResultSet;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetConcurrency().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetConcurrency()
       */
      getResultSetConcurrency(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetHoldability().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetHoldability()
       */
      getResultSetHoldability(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getResultSetType().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getResultSetType()
       */
      getResultSetType(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getUpdateCount().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getUpdateCount()
       */
      getUpdateCount(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Statement#getWarnings().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#getWarnings()
       */
      getWarnings(): string[];

      /**
       * For documentation of this method, see
       * java.sql.Statement#isClosed().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#isClosed()
       */
      isClosed(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#isPoolable().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#isPoolable()
       */
      isPoolable(): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setCursorName(String).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setCursorName(String)
       * @param name The new cursor name, which must be unique within a connection.
       */
      setCursorName(name: string): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setEscapeProcessing(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setEscapeProcessing(Boolean)
       * @param enable If true, escape processing is enabled; otherwise it is disabled.
       */
      setEscapeProcessing(enable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchDirection(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setFetchDirection(Integer)
       * @param direction The specified direction to set, which is either Jdbc.ResultSet.FETCH_FORWARD or Jdbc.ResultSet.FETCH_REVERSE.
       */
      setFetchDirection(direction: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setFetchSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setFetchSize(Integer)
       * @param rows The number of rows to fetch.
       */
      setFetchSize(rows: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxFieldSize(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setMaxFieldSize(Integer)
       * @param max The new column byte size limit; a value of zero indicates no limit.
       */
      setMaxFieldSize(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setMaxRows(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setMaxRows(Integer)
       * @param max The maximum number of rows a result set generated by this statement can have. A value of 0 indicates no limit.
       */
      setMaxRows(max: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setPoolable(boolean).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#setPoolable(Boolean)
       * @param poolable If true, requests that this statement be pooled; otherwise requests it not be pooled.
       */
      setPoolable(poolable: boolean): void;

      /**
       * For documentation of this method, see
       * java.sql.Statement#setQueryTimeout(int).
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
       * For documentation of this method, see
       * java.sql.Struct#getAttributes().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-struct#getAttributes()
       */
      getAttributes(): object[];

      /**
       * For documentation of this method, see
       * java.sql.Struct#getSQLTypeName().
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
       * For documentation of this method, see
       * java.sql.Date#after(Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#after(JdbcTime)
       * @param when A time to compare to.
       */
      after(when: JdbcTime): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Date#before(Date).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#before(JdbcTime)
       * @param when A time to compare to.
       */
      before(when: JdbcTime): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Date#getHours().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getHours()
       */
      getHours(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getMinutes().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getMinutes()
       */
      getMinutes(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getSeconds().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getSeconds()
       */
      getSeconds(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getTime().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#setHours(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setHours(Integer)
       * @param hours The hour to set; this object is updated to represent a point in time within the specified hour of the day, with the year, month, date, minute, and second the same as before, as interpreted in the local time zone.
       */
      setHours(hours: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setMinutes(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setMinutes(Integer)
       * @param minutes The minutes to set; this object is updated to represent a point in time within the specified minute of the hour, with the year, month, date, hour, and second the same as before, as interpreted in the local time zone.
       */
      setMinutes(minutes: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setSeconds(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-time#setSeconds(Integer)
       * @param seconds The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone.
       */
      setSeconds(seconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Time#setTime(long).
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
       * For documentation of this method, see
       * java.sql.Timestamp#after(Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#after(JdbcTimestamp)
       * @param when A timestamp to compare to.
       */
      after(when: JdbcTimestamp): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Timestamp#before(Timestamp).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#before(JdbcTimestamp)
       * @param when A timestamp to compare to.
       */
      before(when: JdbcTimestamp): boolean;

      /**
       * For documentation of this method, see
       * java.sql.Date#getDate().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getDate()
       */
      getDate(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getHours().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getHours()
       */
      getHours(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getMinutes().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getMinutes()
       */
      getMinutes(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getMonth().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getMonth()
       */
      getMonth(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Timestamp#getNanos().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getNanos()
       */
      getNanos(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getSeconds().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getSeconds()
       */
      getSeconds(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Timestamp#getTime().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getTime()
       */
      getTime(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#getYear().
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#getYear()
       */
      getYear(): Integer;

      /**
       * For documentation of this method, see
       * java.sql.Date#setDate(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setDate(Integer)
       * @param date The day of month to set. This timestamp is updated to represent a point in time within the specified day of month, with the year, month, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was April 30, for example, and the date is set to 31, then it is treated as if it were on May 1, because April has only 30 days.
       */
      setDate(date: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setHours(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setHours(Integer)
       * @param hours The hour to set; this object is updated to represent a point in time within the specified hour of the day, with the year, month, date, minute, and second the same as before, as interpreted in the local time zone.
       */
      setHours(hours: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setMinutes(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setMinutes(Integer)
       * @param minutes The minutes to set; this object is updated to represent a point in time within the specified minute of the hour, with the year, month, date, hour, and second the same as before, as interpreted in the local time zone.
       */
      setMinutes(minutes: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setMonth(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setMonth(Integer)
       * @param month The month to set. This timestamp is updated to represent a point in time within the specified month, with the year, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was October 31, for example, and the month is set to June, then the new date is treated as if it were on July 1, because June has only 30 days.
       */
      setMonth(month: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Timestamp#setNanos(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setNanos(Integer)
       * @param nanoseconds The new fractional seconds value.
       */
      setNanos(nanoseconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setSeconds(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setSeconds(Integer)
       * @param seconds The seconds to set; this object is updated to represent a point in time within the specified second of the minute, with the year, month, date, hour, and minute the same as before, as interpreted in the local time zone.
       */
      setSeconds(seconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Timestamp#setTime(long).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setTime(Integer)
       * @param milliseconds The time value to set. The value is milliseconds since January 1, 1970, 00:00:00 GMT.
       */
      setTime(milliseconds: Integer): void;

      /**
       * For documentation of this method, see
       * java.sql.Date#setYear(int).
       * https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp#setYear(Integer)
       * @param year The year value to set; the timestamp's year is set to this value plus 1900. This timestamp is updated to represent a point in time within the specified year, with the month, date, hour, minute, and second the same as before, as interpreted in the local time zone. If the date was February 29, for example, and the year is set to a non-leap year, then the new date is treated as if it were on March 1.
       */
      setYear(year: Integer): void;
    }
  }
}

declare var Jdbc: GoogleAppsScript.JDBC.Jdbc;
