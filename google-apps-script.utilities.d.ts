// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Utilities {
    /**
     * A typesafe enum for character sets.
     */
    enum Charset { US_ASCII, UTF_8 }
    /**
     * Selector of Digest algorithm.
     */
    enum DigestAlgorithm { MD2, MD5, SHA_1, SHA_256, SHA_384, SHA_512 }
    /**
     * Selector of MAC algorithm
     */
    enum MacAlgorithm { HMAC_MD5, HMAC_SHA_1, HMAC_SHA_256, HMAC_SHA_384, HMAC_SHA_512 }
    /**
     * Selector of RSA algorithm
     */
    enum RsaAlgorithm { RSA_SHA_1, RSA_SHA_256 }
    /**
     * This service provides utilities for string encoding/decoding, date formatting, JSON manipulation,
     * and other miscellaneous tasks.
     */
    interface Utilities {
      Charset: typeof Charset;
      DigestAlgorithm: typeof DigestAlgorithm;
      MacAlgorithm: typeof MacAlgorithm;
      RsaAlgorithm: typeof RsaAlgorithm;

      /**
       * Decodes a base-64 encoded string into a UTF-8 byte array.
       *
       *
       *     // This is the base64 encoded form of "Google グループ"
       *     var base64data = "R29vZ2xlIOOCsOODq+ODvOODlw==";
       *
       *     // This logs:
       *     //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
       *     //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
       *     var decoded = Utilities.base64Decode(base64data);
       *     Logger.log(decoded);
       *
       *     // If we want a String instead of a byte array:
       *     // This logs the original "Google グループ"
       *     Logger.log(Utilities.newBlob(decoded).getDataAsString());
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64Decode(String)
       * @param encoded an array of bytes of data to decode
       */
      base64Decode(encoded: string): Byte[];

      /**
       * Decodes a base-64 encoded string into a byte array in a specific character set.
       *
       *
       *     // This is the base64 encoded form of "Google グループ"
       *     var base64data = "R29vZ2xlIOOCsOODq+ODvOODlw==";
       *
       *     var decoded = Utilities.base64Decode(base64data, Utilities.Charset.UTF_8);
       *
       *     // This logs:
       *     //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
       *     //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
       *     Logger.log(decoded);
       *
       *     // If we want a String instead of a byte array:
       *     // This logs the original "Google グループ"
       *     Logger.log(Utilities.newBlob(decoded).getDataAsString());
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64Decode(String,Charset)
       * @param encoded the string of data to decode
       * @param charset a Charset specifying the charset of the input
       */
      base64Decode(encoded: string, charset: Charset): Byte[];

      /**
       * Decodes a base-64 web-safe encoded string into a UTF-8 byte array.
       *
       *
       *     // This is the base64 web-safe encoded form of "Google グループ"
       *     var base64data = "R29vZ2xlIOOCsOODq-ODvOODlw==";
       *
       *     var decoded = Utilities.base64DecodeWebSafe(base64data);
       *
       *     // This logs:
       *     //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
       *     //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
       *     Logger.log(decoded);
       *
       *     // If we want a String instead of a byte array:
       *     // This logs the original "Google グループ"
       *     Logger.log(Utilities.newBlob(decoded).getDataAsString());
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64DecodeWebSafe(String)
       * @param encoded an array of bytes of web-safe data to decode
       */
      base64DecodeWebSafe(encoded: string): Byte[];

      /**
       * Decodes a base-64 web-safe encoded string into a byte array in a specific character set.
       *
       *
       *     // This is the base64 web-safe encoded form of "Google グループ"
       *     var base64data = "R29vZ2xlIOOCsOODq-ODvOODlw==";
       *
       *     var decoded = Utilities.base64DecodeWebSafe(base64data, Utilities.Charset.UTF_8);
       *
       *     // This logs:
       *     //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
       *     //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
       *     Logger.log(decoded);
       *
       *     // If we want a String instead of a byte array:
       *     // This logs the original "Google グループ"
       *     Logger.log(Utilities.newBlob(decoded).getDataAsString());
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64DecodeWebSafe(String,Charset)
       * @param encoded the string of web-safe data to decode
       * @param charset a Charset specifying the charset of the input
       */
      base64DecodeWebSafe(encoded: string, charset: Charset): Byte[];

      /**
       * Generates a base-64 encoded string from the given byte array. Base 64 is a common encoding
       * accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
       * internet protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // Instantiates a blob here for clarity
       *     var blob = Utilities.newBlob("A string here");
       *
       *     // Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
       *     var encoded = Utilities.base64Encode(blob.getBytes());
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64Encode(Byte)
       * @param data a byte[] of data to encode
       */
      base64Encode(data: Byte[]): string;

      /**
       * Generates a base-64 encoded string from the given string. Base 64 is a common encoding accepted
       * by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet
       * protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
       *     var encoded = Utilities.base64Encode("A string here");
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64Encode(String)
       * @param data the string to encode
       */
      base64Encode(data: string): string;

      /**
       * Generates a base-64 encoded string from the given string in a specific character set. A Charset
       * is a way of encoding characters such that they can be encoded. These are typically done in a
       * binary format, which can generally be incompatible with certain data transmission protocols. To
       * make the data compatible, they are generally encoded into base 64, which is a common encoding
       * accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
       * internet protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // "Google Groups" in Katakana (Japanese)
       *     var input = "Google グループ";
       *
       *     // Writes "R29vZ2xlIOOCsOODq+ODvOODlw==" to the log
       *     var encoded = Utilities.base64Encode(input, Utilities.Charset.UTF_8);
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64Encode(String,Charset)
       * @param data the string of data to encode
       * @param charset a Charset specifying the charset of the input
       */
      base64Encode(data: string, charset: Charset): string;

      /**
       * Generates a base-64 web-safe encoded string from the given byte array. Base 64 is a common
       * encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is
       * commonly used in internet protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // Instantiates a blob here for clarity
       *     var blob = Utilities.newBlob("A string here");
       *
       *     // Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
       *     var encoded = Utilities.base64EncodeWebSafe(blob.getBytes());
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64EncodeWebSafe(Byte)
       * @param data an array of bytes of data to encode
       */
      base64EncodeWebSafe(data: Byte[]): string;

      /**
       * Generates a base-64 web-safe encoded string from the given string. Base 64 is a common encoding
       * accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly
       * used in internet protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
       *     var encoded = Utilities.base64EncodeWebSafe("A string here");
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64EncodeWebSafe(String)
       * @param data the string to encode
       */
      base64EncodeWebSafe(data: string): string;

      /**
       * Generates a base-64 web-safe encoded string from the given string in a specific character set.
       * A Charset is a way of encoding characters such that they can be encoded. These are typically
       * done in a binary format, which can generally be incompatible with certain data transmission
       * protocols. To make the data compatible, they are generally encoded into base 64, which is a
       * common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe
       * is commonly used in internet protocols such as email, HTTP, or in XML documents.
       *
       *
       *     // "Google Groups" in Katakana (Japanese)
       *     var input = "Google グループ";
       *
       *     // Writes "R29vZ2xlIOOCsOODq-ODvOODlw==" to the log
       *     var encoded = Utilities.base64EncodeWebSafe(input, Utilities.Charset.UTF_8);
       *     Logger.log(encoded);
       * https://developers.google.com/apps-script/reference/utilities/utilities#base64EncodeWebSafe(String,Charset)
       * @param data the string of data to encode
       * @param charset a Charset specifying the charset of the input
       */
      base64EncodeWebSafe(data: string, charset: Charset): string;

      /**
       * Compute a digest using the specified algorithm on the specified Byte[] value.
       *
       *
       *     var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
       *     var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input);
       *     Logger.log(digest);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeDigest(DigestAlgorithm,Byte)
       * @param algorithm a DigestAlgorithm to use
       * @param value an input string value to compute a digest for
       */
      computeDigest(algorithm: DigestAlgorithm, value: Byte[]): Byte[];

      /**
       * Compute a digest using the specified algorithm on the specified String value.
       *
       *
       *     var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, "input to hash");
       *     Logger.log(digest);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeDigest(DigestAlgorithm,String)
       * @param algorithm a DigestAlgorithm to use
       * @param value an input string value to compute a digest for
       */
      computeDigest(algorithm: DigestAlgorithm, value: string): Byte[];

      /**
       * Compute a digest using the specified algorithm on the specified String value with the
       * given character set.
       *
       *
       *     var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5,
       *                                          "input to hash",
       *                                          Utilities.Charset.US_ASCII);
       *     Logger.log(digest);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeDigest(DigestAlgorithm,String,Charset)
       * @param algorithm a DigestAlgorithm to use
       * @param value an input string value to compute a digest for
       * @param charset a Charset representing the input character set
       */
      computeDigest(algorithm: DigestAlgorithm, value: string, charset: Charset): Byte[];

      /**
       * Signs the provided value using HMAC-SHA256 with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
       *     var key = Utilities.base64Decode("a2V5"); // == base64encode("key")
       *     var signature = Utilities.computeHmacSha256Signature(input, key);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSha256Signature(Byte,Byte)
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       */
      computeHmacSha256Signature(value: Byte[], key: Byte[]): Byte[];

      /**
       * Signs the provided value using HMAC-SHA256 with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeHmacSha256Signature("this is my input",
       *                                                           "my key - use a stronger one");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSha256Signature(String,String)
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       */
      computeHmacSha256Signature(value: string, key: string): Byte[];

      /**
       * Signs the provided value using HMAC-SHA256 with the given key and character set.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeHmacSha256Signature("this is my input",
       *                                                          "my key - use a stronger one",
       *                                                          Utilities.Charset.US_ASCII);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSha256Signature(String,String,Charset)
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       * @param charset a Charset representing the input character set
       */
      computeHmacSha256Signature(value: string, key: string, charset: Charset): Byte[];

      /**
       * Compute a message authentication code using the specified algorithm on the specified key and
       * value.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
       *     var key = Utilities.base64Decode("a2V5"); // == base64encode("key")
       *     var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5, input, key);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSignature(MacAlgorithm,Byte,Byte)
       * @param algorithm a MacAlgorithm algorithm to use to hash the input value
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       */
      computeHmacSignature(algorithm: MacAlgorithm, value: Byte[], key: Byte[]): Byte[];

      /**
       * Compute a message authentication code using the specified algorithm on the specified key and
       * value.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
       *                                                    "input to hash",
       *                                                    "key");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSignature(MacAlgorithm,String,String)
       * @param algorithm a MacAlgorithm algorithm to use to hash the input value
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       */
      computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string): Byte[];

      /**
       * Compute a message authentication code using the specified algorithm on the specified key and
       * value.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
       *                                                    "input to hash",
       *                                                    "key",
       *                                                    Utilities.Charset.US_ASCII);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeHmacSignature(MacAlgorithm,String,String,Charset)
       * @param algorithm a MacAlgorithm algorithm to use to hash the input value
       * @param value the input value to generate a hash for
       * @param key a key to use to generate the hash with
       * @param charset a Charset representing the input character set
       */
      computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string, charset: Charset): Byte[];

      /**
       * Signs the provided value using RSA-SHA1 with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSha1Signature("this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSha1Signature(String,String)
       * @param value The input value to generate a hash for.
       * @param key A PEM formatted key to use to generate the signature.
       */
      computeRsaSha1Signature(value: string, key: string): Byte[];

      /**
       * Signs the provided value using RSA-SHA1 with the given key and charset.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSha1Signature("this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n"
       *         Utilities.Charset.US_ASCII);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSha1Signature(String,String,Charset)
       * @param value The input value to generate a hash for.
       * @param key A PEM formatted key to use to generate the signature.
       * @param charset A Charset representing the input character set.
       */
      computeRsaSha1Signature(value: string, key: string, charset: Charset): Byte[];

      /**
       * Signs the provided value using RSA-SHA256 with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSha256Signature("this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSha256Signature(String,String)
       * @param value the input value to generate a hash for
       * @param key a PEM formatted key to use to generate the signature
       */
      computeRsaSha256Signature(value: string, key: string): Byte[];

      /**
       * Signs the provided value using RSA-SHA256 with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSha256Signature("this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSha256Signature(String,String,Charset)
       * @param value the input value to generate a hash for
       * @param key a PEM formatted key to use to generate the signature
       * @param charset a Charset representing the input character set
       */
      computeRsaSha256Signature(value: string, key: string, charset: Charset): Byte[];

      /**
       * Signs the provided value using the specified RSA algorithm with the given key.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
       *         "this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n");
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSignature(RsaAlgorithm,String,String)
       * @param algorithm A RsaAlgorithm algorithm to use to hash the input value.
       * @param value The input value to generate a hash for.
       * @param key A PEM formatted key to use to generate the signature.
       */
      computeRsaSignature(algorithm: RsaAlgorithm, value: string, key: string): Byte[];

      /**
       * Signs the provided value using the specified RSA algorithm with the given key and charset.
       *
       *
       *     // This writes an array of bytes to the log.
       *     var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
       *         "this is my input",
       *         "-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n",
       *         Utilities.Charset.US_ASCII);
       *     Logger.log(signature);
       * https://developers.google.com/apps-script/reference/utilities/utilities#computeRsaSignature(RsaAlgorithm,String,String,Charset)
       * @param algorithm A RsaAlgorithm algorithm to use to hash the input value.
       * @param value The input value to generate a hash for.
       * @param key A PEM formatted key to use to generate the signature.
       * @param charset A Charset representing the input character set.
       */
      computeRsaSignature(algorithm: RsaAlgorithm, value: string, key: string, charset: Charset): Byte[];

      /**
       * Formats date according to specification described in Java SE SimpleDateFormat class. Please
       * visit the specification at
       * http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
       *
       *
       *
       *     // This formats the date as Greenwich Mean Time in the format
       *     // year-month-dateThour-minute-second.
       *     var formattedDate = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'");
       *     Logger.log(formattedDate);
       * https://developers.google.com/apps-script/reference/utilities/utilities#formatDate(Date,String,String)
       * @param date a Date to format as a String
       * @param timeZone the output timezone of the result
       * @param format a format per the SimpleDateFormat specification
       */
      formatDate(date: Date, timeZone: string, format: string): string;

      /**
       * Performs sprintf-like string formatting using '%'-style format strings.
       *
       *
       *     // " 123.456000"
       *     Utilities.formatString('%11.6f', 123.456);
       *
       *     // "   abc"
       *     Utilities.formatString('%6s', 'abc');
       * https://developers.google.com/apps-script/reference/utilities/utilities#formatString(String,Object...)
       * @param template The format string that controls what gets returned.
       * @param args Objects to use to fill in the '%' placeholders in the template.
       */
      formatString(template: string, ...args: object[]): string;

      /**
       * Get a UUID as a string (equivalent to using the java.util.UUID.randomUUID() method). This identifier is not guaranteed to be unique across
       * all time and space. As such, do not use in situations where guaranteed uniqueness is required.
       *
       *
       *     //This assigns a UUID as a temporary ID for a data object you are creating in your script.
       *     var myDataObject = {
       *        tempId: Utilities.getUuid();
       *     };
       * https://developers.google.com/apps-script/reference/utilities/utilities#getUuid()
       */
      getUuid(): string;

      /**
       *
       * gzip-compresses the provided Blob data and returns it in a new Blob object.
       *
       *
       *     var textBlob = Utilities.newBlob("Some text to compress using gzip compression");
       *
       *     // Create the compressed blob.
       *     var gzipBlob = Utilities.gzip(textBlob);
       * https://developers.google.com/apps-script/reference/utilities/utilities#gzip(BlobSource)
       * @param blob a Blob object to compress using gzip.
       */
      gzip(blob: Base.BlobSource): Base.Blob;

      /**
       *
       * gzip-compresses the provided Blob data and returns it in a new Blob object. This version of the method allows a filename to be specified.
       *
       *
       *     var textBlob = Utilities.newBlob("Some text to compress using gzip compression");
       *
       *     // Create the compressed blob.
       *     var gzipBlob = Utilities.gzip(textBlob, "text.gz");
       * https://developers.google.com/apps-script/reference/utilities/utilities#gzip(BlobSource,String)
       * @param blob a Blob object to compress using gzip.
       * @param name the name of the gzip file to be created
       */
      gzip(blob: Base.BlobSource, name: string): Base.Blob;

      /**
       * Create a new Blob object from a byte array. Blobs are used in many Apps Script APIs that take
       * binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(Byte)
       * @param data the bytes for the blob
       */
      newBlob(data: Byte[]): Base.Blob;

      /**
       * Create a new Blob object from a byte array and content type. Blobs are used in many Apps Script
       * APIs that take binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(Byte,String)
       * @param data the bytes for the blob
       * @param contentType the content type of the blob - can be null
       */
      newBlob(data: Byte[], contentType: string): Base.Blob;

      /**
       * Create a new Blob object from a byte array, content type, and name. Blobs are used in many Apps
       * Script APIs that take binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(Byte,String,String)
       * @param data the bytes for the blob
       * @param contentType - the content type of the blob - can be null
       * @param name the name of the blob - can be null
       */
      newBlob(data: Byte[], contentType: string, name: string): Base.Blob;

      /**
       * Create a new Blob object from a string. Blobs are used in many Apps Script APIs that take
       * binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(String)
       * @param data the string for the blob, assumed UTF-8
       */
      newBlob(data: string): Base.Blob;

      /**
       * Create a new Blob object from a string and content type. Blobs are used in many Apps Script
       * APIs that take binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(String,String)
       * @param data the string for the blob, assumed UTF-8
       * @param contentType the content type of the blob - can be null
       */
      newBlob(data: string, contentType: string): Base.Blob;

      /**
       * Create a new Blob object from a string, content type, and name. Blobs are used in many Apps
       * Script APIs that take binary data as input.
       * https://developers.google.com/apps-script/reference/utilities/utilities#newBlob(String,String,String)
       * @param data the string for the blob, assumed UTF-8
       * @param contentType the content type of the blob - can be null
       * @param name the name of the blob - can be null
       */
      newBlob(data: string, contentType: string, name: string): Base.Blob;

      /**
       * Returns a tabular 2D array representation of a CSV string.
       *
       *
       *     // This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
       *     var csvString = "a,b,c\nd,e,f";
       *     var data = Utilities.parseCsv(csvString);
       * https://developers.google.com/apps-script/reference/utilities/utilities#parseCsv(String)
       * @param csv a string containing a single or multiline data in comma-separated value (CSV) format
       */
      parseCsv(csv: string): string[][];

      /**
       * Returns a tabular 2D array representation of a CSV string using a custom delimiter.
       *
       *
       *     // This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
       *     var csvString = "a\tb\tc\nd\te\tf";
       *     var data = Utilities.parseCsv(csvString, '\t');
       * https://developers.google.com/apps-script/reference/utilities/utilities#parseCsv(String,Char)
       * @param csv a string containing a single or multiline data in comma-separated value (CSV) format
       * @param delimiter between values
       */
      parseCsv(csv: string, delimiter: Char): string[][];

      /**
       * Sleeps for specified number of milliseconds. Immediately puts the script to sleep for the
       * specified number of milliseconds. The maximum allowed value is 300000 (or 5 minutes).
       * https://developers.google.com/apps-script/reference/utilities/utilities#sleep(Integer)
       * @param milliseconds The number of milliseconds to sleep.
       */
      sleep(milliseconds: Integer): void;

      /**
       * Uncompresses a Blob object and returns a Blob containing the uncompressed
       * data.
       *
       *
       *     var textBlob = Utilities.newBlob("Some text to compress using gzip compression");
       *
       *     // Create the compressed blob.
       *     var gzipBlob = Utilities.gzip(textBlob, "text.gz");
       *
       *     // Uncompress the data.
       *     var uncompressedBlob = Utilities.ungzip(gzipBlob);
       * https://developers.google.com/apps-script/reference/utilities/utilities#ungzip(BlobSource)
       * @param blob the Blob of compressed data.
       */
      ungzip(blob: Base.BlobSource): Base.Blob;

      /**
       * Takes a Blob representing a zip file and returns its component files.
       *
       *
       *     var googleFavIconUrl = "https://www.google.com/favicon.ico";
       *     var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";
       *
       *     // Fetch the Google favicon.ico file and get the Blob data
       *     var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
       *     var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
       *
       *     // zip now references a blob containing an archive of both faviconBlob and logoBlob
       *     var zip = Utilities.zip([faviconBlob, logoBlob], "google_images.zip");
       *
       *     // This now unzips the blobs
       *     var files = Utilities.unzip(zip);
       * https://developers.google.com/apps-script/reference/utilities/utilities#unzip(BlobSource)
       * @param blob the zip file blob.
       */
      unzip(blob: Base.BlobSource): Base.Blob[];

      /**
       * Creates a new Blob object that is a zip file containing the data from the Blobs passed in.
       *
       *
       *     var googleFavIconUrl = "https://www.google.com/favicon.ico";
       *     var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";
       *
       *     // Fetch the Google favicon.ico file and get the Blob data
       *     var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
       *     var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
       *
       *     // zip now references a blob containing an archive of both faviconBlob and logoBlob
       *     var zip = Utilities.zip([faviconBlob, logoBlob]);
       * https://developers.google.com/apps-script/reference/utilities/utilities#zip(BlobSource)
       * @param blobs a array of blobs to zip up
       */
      zip(blobs: Base.BlobSource[]): Base.Blob;

      /**
       * Creates a new Blob object that is a zip file containing the data from the Blobs passed in. This
       * version of the method allows a filename to be specified.
       *
       *
       *     var googleFavIconUrl = "https://www.google.com/favicon.ico";
       *     var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";
       *
       *     // Fetch the Google favicon.ico file and get the Blob data
       *     var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
       *     var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
       *
       *     // zip now references a blob containing an archive of both faviconBlob and logoBlob
       *     var zip = Utilities.zip([faviconBlob, logoBlob], "google_images.zip");
       * https://developers.google.com/apps-script/reference/utilities/utilities#zip(BlobSource,String)
       * @param blobs a array of blobs to zip up
       * @param name the name of the zip file to be created
       */
      zip(blobs: Base.BlobSource[], name: string): Base.Blob;
      /** @deprecated DO NOT USE */ jsonParse(jsonString: string): object;
      /** @deprecated DO NOT USE */ jsonStringify(obj: object): string;
    }
  }
}

declare var Charset: GoogleAppsScript.Utilities.Charset;
declare var DigestAlgorithm: GoogleAppsScript.Utilities.DigestAlgorithm;
declare var MacAlgorithm: GoogleAppsScript.Utilities.MacAlgorithm;
declare var RsaAlgorithm: GoogleAppsScript.Utilities.RsaAlgorithm;
declare var Utilities: GoogleAppsScript.Utilities.Utilities;
