// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace URL_Fetch {
    /**
     * This class allows users to access specific information on HTTP responses.
     * See also
     *
     * UrlFetchApp
     */
    interface HTTPResponse {

      /**
       * Returns an attribute/value map of headers for the HTTP response, with headers that have
       * multiple values returned as arrays.
       *
       *
       *     // The code below logs the HTTP headers from the response
       *     // received when fetching the Google home page.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getAllHeaders());
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getAllHeaders()
       */
      getAllHeaders(): object;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Return the data inside this object as a blob.
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the raw binary content of an HTTP response.
       *
       *
       *     // The code below logs the value of the first byte of the Google home page.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getContent()[0]);
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getContent()
       */
      getContent(): Byte[];

      /**
       * Gets the content of an HTTP response encoded as a string.
       *
       *
       *     // The code below logs the HTML code of the Google home page.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getContentText());
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getContentText()
       */
      getContentText(): string;

      /**
       * Returns the content of an HTTP response encoded as a string of the given charset.
       *
       *
       *     // The code below logs the HTML code of the Google home page with the UTF-8 charset.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getContentText("UTF-8"));
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getContentText(String)
       * @param charset a string representing the charset to be used for encoding the HTTP response content
       */
      getContentText(charset: string): string;

      /**
       * Returns an attribute/value map of headers for the HTTP response.
       *
       *
       *     // The code below logs the HTTP headers from the response
       *     // received when fetching the Google home page.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getHeaders());
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getHeaders()
       */
      getHeaders(): object;

      /**
       * Get the HTTP status code (200 for OK, etc.) of an HTTP response.
       *
       *
       *     // The code below logs the HTTP status code from the response received
       *     // when fetching the Google home page.
       *     // It should be 200 if the request succeeded.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getResponseCode());
       * https://developers.google.com/apps-script/reference/url-fetch/http-response#getResponseCode()
       */
      getResponseCode(): Integer;
    }
    /**
     * Fetch resources and communicate with other hosts over the Internet.
     *
     * This service allows scripts to communicate with other applications or access other resources
     * on the web by fetching URLs. A script can use the URL Fetch service to issue HTTP and HTTPS
     * requests and receive responses. The URL Fetch service uses Google's network infrastructure for
     * efficiency and scaling purposes.
     *
     * Requests made using this service originate from a set pool of IP ranges. You can look up the full list of IP addresses
     * if you need to whitelist or approve these requests.
     *
     * This service requires the https://www.googleapis.com/auth/script.external_request
     * scope. In most cases Apps Script automatically detects and includes the scopes a script needs,
     * but if you are setting your scopes
     * explicitly you must manually add this scope to use UrlFetchApp.
     * See also
     *
     * HTTPResponse
     *
     * Setting explicit scopes
     */
    interface UrlFetchApp {

      /**
       * Makes a request to fetch a URL.
       *
       *
       * This works over HTTP as well as HTTPS.
       *
       *
       *     // The code below logs the HTML code of the Google home page.
       *     var response = UrlFetchApp.fetch("http://www.google.com/");
       *     Logger.log(response.getContentText());
       * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String)
       * @param url The URL to fetch.
       */
      fetch(url: string): HTTPResponse;

      /**
       * Makes a request to fetch a URL using optional advanced parameters.
       *
       *
       * This works over HTTP as well as HTTPS.
       *
       *
       *     // Make a GET request and log the returned content.
       *     var response = UrlFetchApp.fetch('http://www.google.com/');
       *     Logger.log(response.getContentText());
       *     // Make a POST request with form data.
       *     var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
       *     var formData = {
       *       'name': 'Bob Smith',
       *       'email': 'bob@example.com',
       *       'resume': resumeBlob
       *     };
       *     // Because payload is a JavaScript object, it is interpreted as
       *     // as form data. (No need to specify contentType; it automatically
       *     // defaults to either 'application/x-www-form-urlencoded'
       *     // or 'multipart/form-data')
       *     var options = {
       *       'method' : 'post',
       *       'payload' : formData
       *     };
       *     UrlFetchApp.fetch('https://httpbin.org/post', options);
       *     // Make a POST request with a JSON payload.
       *     var data = {
       *       'name': 'Bob Smith',
       *       'age': 35,
       *       'pets': ['fido', 'fluffy']
       *     };
       *     var options = {
       *       'method' : 'post',
       *       'contentType': 'application/json',
       *       // Convert the JavaScript object to a JSON string.
       *       'payload' : JSON.stringify(data)
       *     };
       *     UrlFetchApp.fetch('https://httpbin.org/post', options);
       * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String,Object)
       * @param url The URL to fetch.
       * @param params The optional JavaScript object specifying advanced parameters as defined below.
       */
      fetch(url: string, params: object): HTTPResponse;

      /**
       * Makes multiple requests to fetch multiple URLs using optional advanced parameters.
       *
       *
       * This works over HTTP as well as HTTPS.
       *
       *
       *     // Make both a POST request with form data, and a GET request.
       *     var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
       *     var formData = {
       *       'name': 'Bob Smith',
       *       'email': 'bob@example.com',
       *       'resume': resumeBlob
       *     };
       *     // Because payload is a JavaScript object, it is interpreted as
       *     // as form data. (No need to specify contentType; it defaults to either
       *     // 'application/x-www-form-urlencoded' or 'multipart/form-data')
       *     var request1 = {
       *       'url': 'https://httpbin.org/post',
       *       'method' : 'post',
       *       'payload' : formData
       *     };
       *     // A request may also just be a URL.
       *     var request2 = 'https://httpbin.org/get?key=value';
       *     UrlFetchApp.fetchAll([request1, request2]);
       * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetchAll(Object)
       * @param requests An array of either URLs or JavaScript objects specifying requests as defined below.
       */
      fetchAll(requests: object[]): HTTPResponse[];

      /**
       * Returns the request that is made if the operation was invoked.
       *
       *
       * This method does not actually issue the request.
       *
       *
       *     // The code below logs the value for every key of the returned map.
       *     var response = UrlFetchApp.getRequest("http://www.google.com/");
       *     for(i in response) {
       *       Logger.log(i + ": " + response[i]);
       *     }
       * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#getRequest(String)
       * @param url The URL to look up.
       */
      getRequest(url: string): object;

      /**
       * Returns the request that is made if the operation were invoked.
       *
       *
       * This method does not actually issue the request.
       * https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#getRequest(String,Object)
       * @param url The URL to look up.
       * @param params An optional JavaScript object specifying advanced parameters as defined below.
       */
      getRequest(url: string, params: object): object;
    }
  }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;
