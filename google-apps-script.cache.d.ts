// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Cache {
    /**
     * A reference to a particular cache.
     *
     * This class allows you to insert, retrieve, and remove items from a cache. This can be
     * particularly useful when you want frequent access to an expensive or slow resource. For example,
     * say you have an RSS feed at example.com that takes 20 seconds to fetch, but you want to speed up
     * access on an average request.
     *
     *     function getRssFeed() {
     *       var cache = CacheService.getScriptCache();
     *       var cached = cache.get("rss-feed-contents");
     *       if (cached != null) {
     *         return cached;
     *       }
     *       var result = UrlFetchApp.fetch("http://example.com/my-slow-rss-feed.xml"); // takes 20 seconds
     *       var contents = result.getContentText();
     *       cache.put("rss-feed-contents", contents, 1500); // cache for 25 minutes
     *       return contents;
     *     }
     */
    interface Cache {

      /**
       * Gets the cached value for the given key, or null if none is found.
       *
       *
       *     // Gets the value from the cache for the key 'foo'.
       *     var value = cache.get('foo');
       * https://developers.google.com/apps-script/reference/cache/cache#get(String)
       * @param key the key to look up in the cache
       */
      get(key: string): string;

      /**
       * Returns a JavaScript Object containing all key/value pairs found in the cache for an array of
       * keys.
       *
       *
       *     // Gets a set of values from the cache
       *     var values = cache.getAll(['foo', 'x', 'missing']);
       *     // If there were values in the cache for 'foo' and 'x' but not 'missing', then 'values' would
       *     // be: {'foo': 'somevalue', 'x': 'othervalue'}
       * https://developers.google.com/apps-script/reference/cache/cache#getAll(String)
       * @param keys the keys to lookup
       */
      getAll(keys: string[]): object;

      /**
       * Adds a key/value pair to the cache.
       *
       *
       * The maximum length of a key is 250 characters. The maximum amount of data that can be stored
       * per key is 100KB. The value will expire from the cache after 600 seconds (10 minutes).
       *
       *
       *     // Puts the value 'bar' into the cache using the key 'foo'
       *     cache.put('foo', 'bar');
       * https://developers.google.com/apps-script/reference/cache/cache#put(String,String)
       * @param key the key to store the value under
       * @param value the value to be cached
       */
      put(key: string, value: string): void;

      /**
       * Adds a key/value pair to the cache, with an expiration time (in seconds).
       *
       *
       * The maximum length of a key is 250 characters. The maximum amount of data that can be stored
       * per key is 100KB. The specified expiration time is only a suggestion; cached data may be
       * removed before this time if a lot of data is cached.
       *
       *
       *     // Puts the value 'bar' into the cache using the key 'foo', but only for the next 20 seconds.
       *     cache.put('foo', 'bar', 20);
       * https://developers.google.com/apps-script/reference/cache/cache#put(String,String,Integer)
       * @param key the key to store the value under
       * @param value the value to be cached
       * @param expirationInSeconds the maximum time the value remains in the cache, in seconds. The minimum is 1 second and the maximum is 21600 seconds (6 hours).
       */
      put(key: string, value: string, expirationInSeconds: Integer): void;

      /**
       * Adds a set of key/value pairs to the cache.
       *
       *
       * Similar to repeated calls to "put", but more efficient as it only makes one call to the
       * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
       * amount of data that can be stored per key is 100KB. The values will expire from the cache after
       * 600 seconds (10 minutes).
       *
       *
       *     // Puts a set of values into the cache with the keys 'foo', 'x', and 'key'.
       *     var values = {
       *       'foo': 'bar',
       *       'x':'y',
       *       'key': 'value'
       *     };
       *     cache.putAll(values);
       * https://developers.google.com/apps-script/reference/cache/cache#putAll(Object)
       * @param values a JavaScript Object containing string keys and values
       */
      putAll(values: object): void;

      /**
       * Adds a set of key/value pairs to the cache, with an expiration time (in seconds).
       *
       *
       * Similar to repeated calls to "put", but more efficient as it only makes one call to the
       * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
       * amount of data that can be stored per key is 100KB. The specified expiration time is only a
       * suggestion; cached data may be removed before this time if a lot of data is cached.
       *
       *
       *     // Puts a set of values into the cache with the keys 'foo', 'x', and 'key'.
       *     var values = {
       *       'foo': 'bar',
       *       'x':'y',
       *       'key': 'value'
       *     };
       *     cache.putAll(values, 20);
       * https://developers.google.com/apps-script/reference/cache/cache#putAll(Object,Integer)
       * @param values A JavaScript Object containing string keys and values
       * @param expirationInSeconds The maximum time the value remains in the cache, in seconds The minimum allowed expiration is 1 second, and the maximum allowed expiration is 21600 seconds (6 hours). The default expiration is 600 seconds (10 minutes).
       */
      putAll(values: object, expirationInSeconds: Integer): void;

      /**
       * Removes an entry from the cache using the given key.
       *
       *
       *     // Removes any cache entries for 'foo'
       *     cache.remove('foo');
       * https://developers.google.com/apps-script/reference/cache/cache#remove(String)
       * @param key the key to remove from the cache
       */
      remove(key: string): void;

      /**
       * Removes a set of entries from the cache.
       *
       *
       *     // Removes entries from the cache with keys 'foo' and 'x'
       *     cache.removeAll(['foo', 'x']);
       * https://developers.google.com/apps-script/reference/cache/cache#removeAll(String)
       * @param keys the array of keys to remove
       */
      removeAll(keys: string[]): void;
    }
    /**
     * CacheService allows you to access a cache for short term storage of data.
     *
     * This class lets you get a specific cache instance. Public caches are for things that are not
     * dependent on which user is accessing your script. Private caches are for things which are
     * user-specific, like settings or recent activity.
     *
     * The data you write to the cache is not guaranteed to persist until its expiration time. You
     * must be prepared to get back null from all reads.
     */
    interface CacheService {

      /**
       * Gets the cache instance scoped to the current document and script. Document caches are specific
       * to the current document which contains the script. Use these to store script information that
       * is specific to the current document. If this method is called outside of the context of a
       * containing document (such as from a standalone script or web app), this method returns null.
       *
       *
       *     // Gets a cache that is specific to the current document containing the script
       *     var cache = CacheService.getDocumentCache();
       * https://developers.google.com/apps-script/reference/cache/cache-service#getDocumentCache()
       */
      getDocumentCache(): Cache;

      /**
       * Gets the cache instance scoped to the script. Script caches are common to all users of the
       * script. Use these to store information that is not specific to the current user.
       *
       *
       *     // Gets a cache that is common to all users of the script
       *     var cache = CacheService.getScriptCache();
       * https://developers.google.com/apps-script/reference/cache/cache-service#getScriptCache()
       */
      getScriptCache(): Cache;

      /**
       * Gets the cache instance scoped to the current user and script. User caches are specific to the
       * current user of the script. Use these to store script information that is specific to the
       * current user.
       *
       *
       *     // Gets a cache that is specific to the current user of the script
       *     var cache = CacheService.getUserCache();
       * https://developers.google.com/apps-script/reference/cache/cache-service#getUserCache()
       */
      getUserCache(): Cache;
    }
  }
}

declare var CacheService: GoogleAppsScript.Cache.CacheService;
