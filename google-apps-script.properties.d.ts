// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Properties {
    /**
     * The properties object acts as the interface to access user, document, or script properties. The
     * specific property type depends on which of the three methods of PropertiesService the
     * script called: PropertiesService.getDocumentProperties(), PropertiesService.getUserProperties(), or PropertiesService.getScriptProperties().
     * Properties cannot be shared between scripts. For more information about property types, see the
     * guide to the Properties service.
     */
    interface Properties {

      /**
       * Deletes all properties in the current Properties store.
       *
       *
       *     // Deletes all user properties.
       *     var userProperties = PropertiesService.getUserProperties();
       *     userProperties.deleteAllProperties();
       * https://developers.google.com/apps-script/reference/properties/properties#deleteAllProperties()
       */
      deleteAllProperties(): Properties;

      /**
       * Deletes the property with the given key in the current Properties store.
       *
       *
       *     // Deletes the user property 'nickname'.
       *     var userProperties = PropertiesService.getUserProperties();
       *     userProperties.deleteProperty('nickname');
       * https://developers.google.com/apps-script/reference/properties/properties#deleteProperty(String)
       * @param key the key for the property to delete
       */
      deleteProperty(key: string): Properties;

      /**
       * Gets all keys in the current Properties store.
       *
       *
       *     // Sets several properties, then logs the value of each key.
       *     var scriptProperties = PropertiesService.getScriptProperties();
       *     scriptProperties.setProperties({
       *       'cow': 'moo',
       *       'sheep': 'baa',
       *       'chicken': 'cluck'
       *     });
       *     var keys = scriptProperties.getKeys();
       *     Logger.log('Animals known:');
       *     for (var i = 0; i < keys.length; i++) {
       *       Logger.log(keys[i]);
       *     }
       * https://developers.google.com/apps-script/reference/properties/properties#getKeys()
       */
      getKeys(): string[];

      /**
       * Gets a copy of all key-value pairs in the current Properties store. Note that the
       * returned object is not a live view of the store. Consequently, changing the properties on the
       * returned object will not automatically update them in storage, or vice versa.
       *
       *
       *     // Sets several script properties, then retrieves them and logs them.
       *     var scriptProperties = PropertiesService.getScriptProperties();
       *     scriptProperties.setProperties({
       *       'cow': 'moo',
       *       'sheep': 'baa',
       *       'chicken': 'cluck'
       *     });
       *
       *     var animalSounds = scriptProperties.getProperties();
       *
       *     // Logs:
       *     // A chicken goes cluck!
       *     // A cow goes moo!
       *     // A sheep goes baa!
       *     for (var kind in animalSounds) {
       *       Logger.log('A %s goes %s!', kind, animalSounds[kind]);
       *     }
       * https://developers.google.com/apps-script/reference/properties/properties#getProperties()
       */
      getProperties(): object;

      /**
       * Gets the value associated with the given key in the current Properties store, or null if no such key exists.
       *
       *
       *     // Gets the user property 'nickname'.
       *     var userProperties = PropertiesService.getUserProperties();
       *     var nickname = userProperties.getProperty('nickname');
       *     Logger.log(nickname);
       * https://developers.google.com/apps-script/reference/properties/properties#getProperty(String)
       * @param key the key for the property value to retrieve
       */
      getProperty(key: string): string;

      /**
       * Sets all key-value pairs from the given object in the current Properties store.
       *
       *
       *     // Sets multiple user properties at once.
       *     var userProperties = PropertiesService.getUserProperties();
       *     var newProperties = {nickname: 'Bob', region: 'US', language: 'EN'};
       *     userProperties.setProperties(newProperties);
       * https://developers.google.com/apps-script/reference/properties/properties#setProperties(Object)
       * @param properties an object containing key-values pairs to set
       */
      setProperties(properties: object): Properties;

      /**
       * Sets all key-value pairs from the given object in the current Properties store,
       * optionally deleting all other properties in the store.
       *
       *
       *     // Sets multiple user properties at once while deleting all other user properties.
       *     var userProperties = PropertiesService.getUserProperties();
       *     var newProperties = {nickname: 'Bob', region: 'US', language: 'EN'};
       *     userProperties.setProperties(newProperties, true);
       * https://developers.google.com/apps-script/reference/properties/properties#setProperties(Object,Boolean)
       * @param properties an object containing key-values pairs to set
       * @param deleteAllOthers true to delete all other key-value pairs in the properties object; false to not
       */
      setProperties(properties: object, deleteAllOthers: boolean): Properties;

      /**
       * Sets the given key-value pair in the current Properties store.
       *
       *
       *     // Sets the user property 'nickname' to 'Bobby'.
       *     var userProperties = PropertiesService.getUserProperties();
       *     userProperties.setProperty('nickname', 'Bobby');
       * https://developers.google.com/apps-script/reference/properties/properties#setProperty(String,String)
       * @param key the key for the property
       * @param value the value to associate with the key
       */
      setProperty(key: string, value: string): Properties;
    }
    /**
     * Allows scripts to store simple data in key-value pairs scoped to one script, one user of a
     * script, or one document in which an add-on is used. Properties cannot be shared between scripts.
     * For more information about when to use each type of property, see the guide to the Properties service.
     *
     *     // Sets three properties of different types.
     *     var documentProperties = PropertiesService.getDocumentProperties();
     *     var scriptProperties = PropertiesService.getScriptProperties();
     *     var userProperties = PropertiesService.getUserProperties();
     *
     *     documentProperties.setProperty('DAYS_TO_FETCH', '5');
     *     scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/MyWeatherService/');
     *     userProperties.setProperty('DISPLAY_UNITS', 'metric');
     */
    interface PropertiesService {

      /**
       * Gets a property store (for this script only) that all users can access within the open
       * document, spreadsheet, or form. It is only available if the script is published and executing
       * as an add-on or if it is bound to a Google file
       * type. When document properties are not available this method returns null. Document
       * properties created by a script are not accessible outside that script, even by other scripts
       * accessing the same document.
       * https://developers.google.com/apps-script/reference/properties/properties-service#getDocumentProperties()
       */
      getDocumentProperties(): Properties;

      /**
       * Gets a property store that all users can access, but only within this script.
       * https://developers.google.com/apps-script/reference/properties/properties-service#getScriptProperties()
       */
      getScriptProperties(): Properties;

      /**
       * Gets a property store that only the current user can access, and only within this script.
       * https://developers.google.com/apps-script/reference/properties/properties-service#getUserProperties()
       */
      getUserProperties(): Properties;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * Script Properties are key-value pairs stored by a script in a persistent store. Script Properties
     * are scoped per script, regardless of which user runs the script.
     */
    interface ScriptProperties {
      /** @deprecated DO NOT USE */ deleteAllProperties(): ScriptProperties;
      /** @deprecated DO NOT USE */ deleteProperty(key: string): ScriptProperties;
      /** @deprecated DO NOT USE */ getKeys(): string[];
      /** @deprecated DO NOT USE */ getProperties(): object;
      /** @deprecated DO NOT USE */ getProperty(key: string): string;
      /** @deprecated DO NOT USE */ setProperties(properties: object): ScriptProperties;
      /** @deprecated DO NOT USE */ setProperties(properties: object, deleteAllOthers: boolean): ScriptProperties;
      /** @deprecated DO NOT USE */ setProperty(key: string, value: string): ScriptProperties;
    }
    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * User Properties are key-value pairs unique to a user. User Properties are scoped per user; any
     * script running under the identity of a user can access User Properties for that user only.
     */
    interface UserProperties {
      /** @deprecated DO NOT USE */ deleteAllProperties(): UserProperties;
      /** @deprecated DO NOT USE */ deleteProperty(key: string): UserProperties;
      /** @deprecated DO NOT USE */ getKeys(): string[];
      /** @deprecated DO NOT USE */ getProperties(): object;
      /** @deprecated DO NOT USE */ getProperty(key: string): string;
      /** @deprecated DO NOT USE */ setProperties(properties: object): UserProperties;
      /** @deprecated DO NOT USE */ setProperties(properties: object, deleteAllOthers: boolean): UserProperties;
      /** @deprecated DO NOT USE */ setProperty(key: string, value: string): UserProperties;
    }
  }
}

declare var PropertiesService: GoogleAppsScript.Properties.PropertiesService;
declare var ScriptProperties: GoogleAppsScript.Properties.ScriptProperties;
declare var UserProperties: GoogleAppsScript.Properties.UserProperties;
