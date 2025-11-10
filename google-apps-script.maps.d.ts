// Type definitions for Google Apps Script 2025-11-10
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Maps {
    /**
     * An enum representing the types of restrictions to avoid when finding directions.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.Avoid.TOLLS.
     */
    enum Avoid { TOLLS, HIGHWAYS }
    /**
     * An enum representing the named colors available to use in map images.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.Color.BLACK.
     */
    enum Color { BLACK, BROWN, GREEN, PURPLE, YELLOW, BLUE, GRAY, ORANGE, RED, WHITE }
    /**
     * Allows for the retrieval of directions between locations.
     * The example below shows how you can use this class to get the directions from Times Square to
     * Central Park, stopping first at Lincoln Center, plot the locations and path on a map, and send
     * the map in an email.
     *
     *     // Get the directions.
     *     const directions = Maps.newDirectionFinder()
     *                            .setOrigin('Times Square, New York, NY')
     *                            .addWaypoint('Lincoln Center, New York, NY')
     *                            .setDestination('Central Park, New York, NY')
     *                            .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *                            .getDirections();
     *     const route = directions.routes[0];
     *
     *     // Set up marker styles.
     *
     *     let markerLetterCode = 'A'.charCodeAt();
     *
     *     // Add markers to the map.
     *     const map = Maps.newStaticMap();
     *     for (let i = 0; i < route.legs.length; i++) {
     *       const leg = route.legs[i];
     *       if (i === 0) {
     *         // Add a marker for the start location of the first leg only.
     *         map.setMarkerStyle(
     *             Maps.StaticMap.MarkerSize.MID,
     *             Maps.StaticMap.Color.GREEN,
     *             String.fromCharCode(markerLetterCode),
     *         );
     *         map.addMarker(leg.start_location.lat, leg.start_location.lng);
     *         markerLetterCode++;
     *       }
     *       map.setMarkerStyle(
     *           Maps.StaticMap.MarkerSize.MID,
     *           Maps.StaticMap.Color.GREEN,
     *           String.fromCharCode(markerLetterCode),
     *       );
     *       map.addMarker(leg.end_location.lat, leg.end_location.lng);
     *       markerLetterCode++;
     *     }
     *
     *     // Add a path for the entire route.
     *     map.addPath(route.overview_polyline.points);
     *
     *     // Send the map in an email.
     *     const toAddress = Session.getActiveUser().getEmail();
     *     MailApp.sendEmail(
     *         toAddress,
     *         'Directions',
     *         `Please open: ${map.getMapUrl()}&key=YOUR_API_KEY`,
     *         {
     *           htmlBody: 'See below.<br/><img src="cid:mapImage">',
     *           inlineImages: {
     *             mapImage: Utilities.newBlob(map.getMapImage(), 'image/png'),
     *           },
     *         },
     *     );
     *
     * See also
     *
     * Google Directions API
     */
    interface DirectionFinder {

      /**
       * Adds a waypoint that the route must pass through, using a point (lat/lng).
       *
       *     // Creates a DirectionFinder with a wapoint at Lincoln Center.
       *     const directionFinder = Maps.newDirectionFinder().addWaypoint(
       *         40.772628,
       *         -73.984243,
       *     );
       *
       * Return:
       * - DirectionFinder — The DirectionFinder object to facilitate chaining of calls.
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#addWaypoint(Number,Number)
       * @param latitude Latitude of the waypoint.
       * @param longitude Longitude of the waypoint.
       */
      addWaypoint(latitude: number, longitude: number): DirectionFinder;

      /**
       * Adds a waypoint that the route must pass through, using an address.
       *
       *     // Creates a DirectionFinder with a wapoint at Lincoln Center.
       *     const directionFinder = Maps.newDirectionFinder().addWaypoint(
       *         'Lincoln Center, New York, NY',
       *     );
       *
       * Return:
       * - DirectionFinder — The DirectionFinder object to facilitate chaining of calls.
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#addWaypoint(String)
       * @param address An address.
       */
      addWaypoint(address: string): DirectionFinder;

      /**
       * Clears the current set of waypoints.
       *
       *     const directionFinder = Maps.newDirectionFinder();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all waypoints added with addWaypoint().
       *     directionFinder.clearWaypoints();
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#clearWaypoints()
       */
      clearWaypoints(): DirectionFinder;

      /**
       * Gets the directions using the origin, destination, and other options that were set.
       *
       *     // Logs how long it would take to walk from Times Square to Central Park.
       *     const directions = Maps.newDirectionFinder()
       *                            .setOrigin('Times Square, New York, NY')
       *                            .setDestination('Central Park, New York, NY')
       *                            .setMode(Maps.DirectionFinder.Mode.WALKING)
       *                            .getDirections();
       *     Logger.log(directions.routes[0].legs[0].duration.text);
       *
       * Return:
       * - Object — a JSON object containing the set of routes for the directions, as described here
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#getDirections()
       */
      getDirections(): any;

      /**
       * Sets whether or not alternative routes should be returned, instead of just the highest ranked route (defaults to false). If true, the resulting object's routes array may contain multiple entries.
       *
       *     // Creates a DirectionFinder with alternative routes enabled.
       *     const directionFinder = Maps.newDirectionFinder().setAlternatives(true);
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setAlternatives(Boolean)
       * @param useAlternatives true to return alternative routes, false otherwise
       */
      setAlternatives(useAlternatives: boolean): DirectionFinder;

      /**
       * Sets the desired time of arrival (when applicable).
       *
       *     // Creates a DirectionFinder with an arrival time of 2 hours from now.
       *     const now = new Date();
       *     const arrive = new Date(now.getTime() + 2 * 60 * 60 * 1000);
       *     const directionFinder = Maps.newDirectionFinder().setArrive(arrive);
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setArrive(Date)
       * @param time the time of arrival
       */
      setArrive(time: Date): DirectionFinder;

      /**
       * Sets whether to avoid certain types of restrictions.
       *
       *     // Creates a DirectionFinder that avoid highways.
       *     const directionFinder = Maps.newDirectionFinder().setAvoid(
       *         Maps.DirectionFinder.Avoid.HIGHWAYS,
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setAvoid(String)
       * @param avoid a constant value from Avoid
       */
      setAvoid(avoid: string): DirectionFinder;

      /**
       * Sets the desired time of departure (when applicable).
       *
       *     // Creates a DirectionFinder with a departure time of 1 hour from now.
       *     const now = new Date();
       *     const depart = new Date(now.getTime() + 1 * 60 * 60 * 1000);
       *     const directionFinder = Maps.newDirectionFinder().setDepart(depart);
       *
       * Return:
       * - DirectionFinder — The DirectionFinder object to facilitate chaining of calls.
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDepart(Date)
       * @param time the time of departure
       */
      setDepart(time: Date): DirectionFinder;

      /**
       * Sets the ending location for which to calculate directions to, using a point (lat/lng).
       *
       *     // Creates a DirectionFinder with the destination set to Central Park.
       *     const directionFinder = Maps.newDirectionFinder().setDestination(
       *         40.777052,
       *         -73.975464,
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDestination(Number,Number)
       * @param latitude the latitude of the ending location
       * @param longitude the longitude of the ending location
       */
      setDestination(latitude: number, longitude: number): DirectionFinder;

      /**
       * Sets the ending location for which to calculate directions to, using an address.
       *
       *     // Creates a DirectionFinder with the destination set to Central Park.
       *     const directionFinder = Maps.newDirectionFinder().setDestination(
       *         'Central Park, New York, NY',
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDestination(String)
       * @param address the ending address
       */
      setDestination(address: string): DirectionFinder;

      /**
       * Sets the language to be used for the directions.
       *
       *     // Creates a DirectionFinder with the language set to French.
       *     const directionFinder = Maps.newDirectionFinder().setLanguage('fr');
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Language Support in Google Maps APIs
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setLanguage(String)
       * @param language a BCP-47 language identifier
       */
      setLanguage(language: string): DirectionFinder;

      /**
       * Sets the mode of travel (defaults to driving).
       *
       *     // Creates a DirectionFinder with the mode set to walking.
       *     const directionFinder = Maps.newDirectionFinder().setMode(
       *         Maps.DirectionFinder.Mode.WALKING,
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setMode(String)
       * @param mode a constant value from Mode
       */
      setMode(mode: string): DirectionFinder;

      /**
       * Sets whether or not to optimize the provided route by rearranging the waypoints in a more efficient order (defaults to false).
       *
       *     // Creates a DirectionFinder with wapoint optimization enabled.
       *     const directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOptimizeWaypoints(Boolean)
       * @param optimizeOrder true to optimize the order, or false otherwise
       */
      setOptimizeWaypoints(optimizeOrder: boolean): DirectionFinder;

      /**
       * Sets the starting location from which to calculate directions, using a point (lat/lng).
       *
       *     // Creates a DirectionFinder with the origin set to Times Square.
       *     const directionFinder = Maps.newDirectionFinder().setOrigin(
       *         40.759011,
       *         -73.984472,
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOrigin(Number,Number)
       * @param latitude the latitude of the starting location
       * @param longitude the longitude of the starting location
       */
      setOrigin(latitude: number, longitude: number): DirectionFinder;

      /**
       * Sets the starting location from which to calculate directions, using an address.
       *
       *     // Creates a DirectionFinder with the origin set to Times Square.
       *     const directionFinder = Maps.newDirectionFinder().setOrigin(
       *         'Times Square, New York, NY',
       *     );
       *
       * Return:
       * - DirectionFinder — the DirectionFinder instance to facilitate chaining of calls
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOrigin(String)
       * @param address the starting address
       */
      setOrigin(address: string): DirectionFinder;

      /**
       * Sets a region to use when interpreting location names. The supported region codes correspond to the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to "maps.google.co.uk".
       *
       *     // Creates a DirectionFinder with the region set to France.
       *     const directionFinder = Maps.newDirectionFinder().setRegion('fr');
       *
       * Return:
       * - DirectionFinder — the DirectionFinder object to facilitate chaining of calls
       *
       * - Google Directions API
       *
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setRegion(String)
       * @param region the region code to use
       */
      setRegion(region: string): DirectionFinder;
    }
    /**
     * A collection of enums used by DirectionFinder.
     */
    interface DirectionFinderEnums {
      Avoid: typeof Avoid;
      Mode: typeof Mode;
    }
    /**
     * Allows for the sampling of elevations at particular locations.
     * The example below shows how you can use this class to determine the highest point along the route
     * from Denver to Grand Junction in Colorado, plot it on a map, and save the map to Google Drive.
     *
     *     // Get directions from Denver to Grand Junction.
     *     const directions = Maps.newDirectionFinder()
     *                            .setOrigin('Denver, CO')
     *                            .setDestination('Grand Junction, CO')
     *                            .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *                            .getDirections();
     *     const route = directions.routes[0];
     *
     *     // Get elevation samples along the route.
     *     const numberOfSamples = 30;
     *     const response = Maps.newElevationSampler().samplePath(
     *         route.overview_polyline.points,
     *         numberOfSamples,
     *     );
     *
     *     // Determine highest point.
     *
     *     let highestLocation = null;
     *     let highestElevation = Number.MIN_VALUE;
     *     for (const sample of response.results) {
     *       if (sample.elevation > highestElevation) {
     *         highestElevation = sample.elevation;
     *         highestLocation = sample.location;
     *       }
     *     }
     *
     *     // Add the path and marker to a map.
     *     const map = Maps.newStaticMap()
     *                     .addPath(route.overview_polyline.points)
     *                     .addMarker(highestLocation.lat, highestLocation.lng);
     *
     *     // Save the map to your drive
     *     DriveApp.createFile(
     *         Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'),
     *     );
     *
     * See also
     *
     * Google Elevation API
     */
    interface ElevationSampler {

      /**
       * Returns elevation data for a single point (lat/lng).
       *
       *     // Gets the elevation of Times Square using a point.
       *     const data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
       *     Logger.log(data.results[0].elevation);
       *
       * Return:
       * - Object — a JSON Object containing the elevation data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocation(Number,Number)
       * @param latitude the latitude of the point to sample
       * @param longitude the longitude of the point to sample
       */
      sampleLocation(latitude: number, longitude: number): any;

      /**
       * Returns elevation data for a series of points (lat/lng).
       *
       *     // Gets the elevation of Times Square and Central Park using points.
       *     const data = Maps.newElevationSampler().sampleLocations([
       *       // Times Square
       *       40.759011,
       *       -73.984472,
       *       // Central Park
       *       40.777052,
       *       -73.975464,
       *     ]);
       *     Logger.log(`Times Square: ${data.results[0].elevation}`);
       *     Logger.log(`Central Park: ${data.results[1].elevation}`);
       *
       * Return:
       * - Object — a JSON Object containing the elevation data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocations(Number)
       * @param points an array of latitude/longitude pairs
       */
      sampleLocations(points: number[]): any;

      /**
       * Returns elevation data for the points in an encoded polyline.
       *
       *     // Gets the elevation of Times Square and Central Park using a polyline.
       *     const data = Maps.newElevationSampler().sampleLocations('yvwwF|aqbMwoBiw@');
       *     Logger.log(`Times Square: ${data.results[0].elevation}`);
       *     Logger.log(`Central Park: ${data.results[1].elevation}`);
       *
       * Return:
       * - Object — a JSON Object containing the elevation data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocations(String)
       * @param encodedPolyline an encoded polyline of points to sample
       */
      sampleLocations(encodedPolyline: string): any;

      /**
       * Returns elevation data for a number of samples along a line, defined using a series of points.
       *
       *     // Gets the elevation of five points between Times Square and Central Park.
       *     const data = Maps.newElevationSampler().samplePath(
       *         [
       *           // Times Square
       *           40.759011,
       *           -73.984472,
       *           // Central Park
       *           40.777052,
       *           -73.975464,
       *         ],
       *         5,
       *     );
       *     for (let i = 0; i < data.results.length; i++) {
       *       Logger.log(data.results[i].elevation);
       *     }
       *
       * Return:
       * - Object — a JSON Object containing the elevation data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#samplePath(Number,Integer)
       * @param points an array of latitude/longitude pairs defining a path to sample over
       * @param numSamples the number of points to sample along the path of points
       */
      samplePath(points: number[], numSamples: Integer): any;

      /**
       * Returns elevation data for a number of samples along a line, defined using an encoded polyline.
       *
       *     // Gets the elevation of five points between Times Square and Central Park.
       *     const data = Maps.newElevationSampler().samplePath('yvwwF|aqbMwoBiw@', 5);
       *     for (let i = 0; i < data.results.length; i++) {
       *       Logger.log(data.results[i].elevation);
       *     }
       *
       * Return:
       * - Object — a JSON Object containing the elevation data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#samplePath(String,Integer)
       * @param encodedPolyline an encoded polyline of points defining a path to sample over
       * @param numSamples the number of points to sample along the path of points
       */
      samplePath(encodedPolyline: string, numSamples: Integer): any;
    }
    /**
     * An enum representing the format of the map image.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.Format.PNG.
     * See also
     *
     * Google Static Maps API
     */
    enum Format { PNG, PNG8, PNG32, GIF, JPG, JPG_BASELINE }
    /**
     * Allows for the conversion between an address and geographical coordinates.
     * The example below shows how you can use this class find the top nine matches for the location
     * "Main St" in Colorado, add them to a map, and then embed it in a new Google Doc.
     *
     *     // Find the best matches for "Main St" in Colorado.
     *     const response = Maps.newGeocoder()
     *                          // The latitudes and longitudes of southwest and northeast
     *                          // corners of Colorado, respectively.
     *                          .setBounds(36.998166, -109.045486, 41.001666, -102.052002)
     *                          .geocode('Main St');
     *
     *     // Create a Google Doc and map.
     *     const doc = DocumentApp.create('My Map');
     *     const map = Maps.newStaticMap();
     *
     *     // Add each result to the map and doc.
     *     for (let i = 0; i < response.results.length && i < 9; i++) {
     *       const result = response.results[i];
     *       map.setMarkerStyle(null, null, i + 1);
     *       map.addMarker(result.geometry.location.lat, result.geometry.location.lng);
     *       doc.appendListItem(result.formatted_address);
     *     }
     *
     *     // Add the finished map to the doc.
     *     doc.appendImage(Utilities.newBlob(map.getMapImage(), 'image/png'));
     *
     * See also
     *
     * Google Geocoding API
     */
    interface Geocoder {

      /**
       * Gets the approximate geographic points for a given address.
       *
       *     // Gets the geographic coordinates for Times Square.
       *     const response = Maps.newGeocoder().geocode('Times Square, New York, NY');
       *     for (let i = 0; i < response.results.length; i++) {
       *       const result = response.results[i];
       *       Logger.log(
       *           '%s: %s, %s',
       *           result.formatted_address,
       *           result.geometry.location.lat,
       *           result.geometry.location.lng,
       *       );
       *     }
       *
       * Return:
       * - Object — a JSON Object containing the geocoding data, as described here
       *
       * https://developers.google.com/apps-script/reference/maps/geocoder#geocode(String)
       * @param address an address
       */
      geocode(address: string): any;

      /**
       * Gets the approximate addresses for a given geographic point.
       *
       *     // Gets the address of a point in Times Square.
       *     const response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
       *     for (let i = 0; i < response.results.length; i++) {
       *       const result = response.results[i];
       *       Logger.log(
       *           '%s: %s, %s',
       *           result.formatted_address,
       *           result.geometry.location.lat,
       *           result.geometry.location.lng,
       *       );
       *     }
       *
       * Return:
       * - Object — a JSON Object containing the reverse geocoding data, as described here
       *
       * - Google Geocoding API
       *
       * https://developers.google.com/apps-script/reference/maps/geocoder#reverseGeocode(Number,Number)
       * @param latitude the latitude of the point
       * @param longitude the longitude of the point
       */
      reverseGeocode(latitude: number, longitude: number): any;

      /**
       * Sets the bounds of an area that should be given extra preference in the results.
       *
       *     // Creates a Geocoder that prefers points in the area of Manhattan.
       *     const geocoder = Maps.newGeocoder().setBounds(
       *         40.699642,
       *         -74.021072,
       *         40.877569,
       *         -73.908548,
       *     );
       *
       * Return:
       * - Geocoder — the Geocoder object to facilitate chaining of calls
       *
       * - Google Geocoding API
       *
       * https://developers.google.com/apps-script/reference/maps/geocoder#setBounds(Number,Number,Number,Number)
       * @param swLatitude the latitude of the south west corner of the bounds
       * @param swLongitude the longitude of the south west corner of the bounds
       * @param neLatitude the latitude of the north east corner of the bounds
       * @param neLongitude the longitude of the north east corner of the bounds
       */
      setBounds(swLatitude: number, swLongitude: number, neLatitude: number, neLongitude: number): Geocoder;

      /**
       * Sets the language to be used in the results.
       *
       *     // Creates a Geocoder with the language set to French.
       *     const geocoder = Maps.newGeocoder().setLanguage('fr');
       *
       * Return:
       * - Geocoder — the Geocoder object to facilitate chaining of calls.
       *
       * - Encoded Polyline Format
       *
       * https://developers.google.com/apps-script/reference/maps/geocoder#setLanguage(String)
       * @param language a BCP-47 language identifier
       */
      setLanguage(language: string): Geocoder;

      /**
       * Sets a region to use when interpreting location names. The supported region codes correspond to the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to "maps.google.co.uk".
       *
       *     // Creates a Geocoder with the region set to France.
       *     const geocoder = Maps.newGeocoder().setRegion('fr');
       *
       * Return:
       * - Geocoder — the Geocoder object to facilitate chaining of calls
       *
       * - Google Geocoding API
       *
       * https://developers.google.com/apps-script/reference/maps/geocoder#setRegion(String)
       * @param region the region code to use
       */
      setRegion(region: string): Geocoder;
    }
    /**
     * Allows for direction finding, geocoding, elevation sampling and the creation of static map
     * images.
     */
    interface Maps {
      DirectionFinder: DirectionFinderEnums;
      StaticMap: StaticMapEnums;

      /**
       * Decodes an encoded polyline string back into an array of points.
       *
       *     // Decodes a string representation of the latitudes and longitudes of
       *     // Minneapolis and Milwaukee respectively.
       *     const polyline = 'qvkpG`qhxPbgyI_zq_@';
       *     const points = Maps.decodePolyline(polyline);
       *     for (let i = 0; i < points.length; i += 2) {
       *       Logger.log('%s, %s', points[i], points[i + 1]);
       *     }
       *
       * Return:
       * - Number[] — An array of latitude longitude pairs (lat0, long0, lat1, long1, ...).
       *
       * - Encoded Polyline Format
       *
       * https://developers.google.com/apps-script/reference/maps/maps#decodePolyline(String)
       * @param polyline An encoded polyline to decode.
       */
      decodePolyline(polyline: string): number[];

      /**
       * Encodes an array of points into a string.
       *
       *     // The latitudes and longitudes of New York and Boston respectively.
       *     const points = [40.77, -73.97, 42.34, -71.04];
       *     const polyline = Maps.encodePolyline(points);
       *
       * Return:
       * - String — An encoded string representing those points.
       *
       * - Encoded Polyline Format
       *
       * https://developers.google.com/apps-script/reference/maps/maps#encodePolyline(Number)
       * @param points An array of latitude/longitude pairs to encode.
       */
      encodePolyline(points: number[]): string;

      /**
       * Creates a new DirectionFinder object.
       *
       * Return:
       * - DirectionFinder — A new direction finder object.
       *
       * https://developers.google.com/apps-script/reference/maps/maps#newDirectionFinder()
       */
      newDirectionFinder(): DirectionFinder;

      /**
       * Creates an ElevationSampler object.
       *
       * Return:
       * - ElevationSampler — A new elevation sampler object.
       *
       * https://developers.google.com/apps-script/reference/maps/maps#newElevationSampler()
       */
      newElevationSampler(): ElevationSampler;

      /**
       * Creates a new Geocoder object.
       *
       * Return:
       * - Geocoder — A new geocoder object.
       *
       * https://developers.google.com/apps-script/reference/maps/maps#newGeocoder()
       */
      newGeocoder(): Geocoder;

      /**
       * Creates a new StaticMap object.
       *
       * Return:
       * - StaticMap — A new static map object.
       *
       * https://developers.google.com/apps-script/reference/maps/maps#newStaticMap()
       */
      newStaticMap(): StaticMap;

      /**
       * Enables the use of an externally established Google Maps APIs Premium Plan account, to leverage additional quota allowances. Your client ID and signing key can be obtained from the Google Enterprise Support Portal. Set these values to null to go back to using the default quota allowances.
       *
       *     Maps.setAuthentication('gme-123456789', 'VhSEZvOXVSdnlxTnpJcUE');
       *
       * https://developers.google.com/apps-script/reference/maps/maps#setAuthentication(String,String)
       * @param clientId A client identifier.
       * @param signingKey A private signing key.
       */
      setAuthentication(clientId: string, signingKey: string): void;
    }
    /**
     * An enum representing the size of a marker added to a map.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.MarkerSize.TINY.
     * See also
     *
     * Google Static Maps API
     */
    enum MarkerSize { TINY, MID, SMALL }
    /**
     * An enum representing the mode of travel to use when finding directions.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.Mode.DRIVING.
     */
    enum Mode { DRIVING, WALKING, BICYCLING, TRANSIT }
    /**
     * Allows for the creation and decoration of static map images.
     *
     * The example below shows how you can use this class to create a map of New York City's Theatre
     * District, including nearby train stations, and display it in a simple web app.
     *
     *     // Create a map centered on Times Square.
     *     const map = Maps.newStaticMap().setSize(600, 600).setCenter(
     *         'Times Square, New York, NY');
     *
     *     // Add markers for the nearbye train stations.
     *     map.setMarkerStyle(
     *         Maps.StaticMap.MarkerSize.MID,
     *         Maps.StaticMap.Color.RED,
     *         'T',
     *     );
     *     map.addMarker('Grand Central Station, New York, NY');
     *     map.addMarker('Penn Station, New York, NY');
     *
     *     // Show the boundaries of the Theatre District.
     *     const corners = [
     *       '8th Ave & 53rd St, New York, NY',
     *       '6th Ave & 53rd St, New York, NY',
     *       '6th Ave & 40th St, New York, NY',
     *       '8th Ave & 40th St, New York, NY',
     *     ];
     *     map.setPathStyle(4, Maps.StaticMap.Color.BLACK, Maps.StaticMap.Color.BLUE);
     *     map.beginPath();
     *     for (let i = 0; i < corners.length; i++) {
     *       map.addAddress(corners[i]);
     *     }
     *     // All static map URLs require an API key.
     *     const url = `${map.getMapUrl()}&key=YOUR_API_KEY`;
     *
     * See also
     *
     * Google Static Maps API
     */
    interface StaticMap {

      /**
       * Adds a new address to the current path definition.
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const map = Maps.newStaticMap()
       *                     .beginPath()
       *                     .addAddress('New York, NY')
       *                     .addAddress('Boston, MA')
       *                     .endPath();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addAddress(String)
       * @param address An address to add.
       */
      addAddress(address: string): StaticMap;

      /**
       * Adds a marker to the map using a point (lat/lng).
       *
       *     // Creates a map and adds a marker at the specified coordinates.
       *     const map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addMarker(Number,Number)
       * @param latitude The latitude of the new marker.
       * @param longitude The longitude of the new marker.
       */
      addMarker(latitude: number, longitude: number): StaticMap;

      /**
       * Adds a marker to the map using an address.
       *
       *     // Creates a map and adds a marker at the specified address.
       *     const map = Maps.newStaticMap().addMarker('76 9th Ave, New York NY');
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addMarker(String)
       * @param address The address at which to place the new marker.
       */
      addMarker(address: string): StaticMap;

      /**
       * Adds a path to the map using an array of points.
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const map = Maps.newStaticMap().addPath([
       *       40.714353,
       *       -74.005973,
       *       42.358431,
       *       -71.059773,
       *     ]);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addPath(Number)
       * @param points An array of latitude/longitude pairs that define the path.
       */
      addPath(points: number[]): StaticMap;

      /**
       * Adds a path to the map using an encoded polyline.
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const polyline = Maps.encodePolyline([
       *       40.714353,
       *       -74.005973,
       *       42.358431,
       *       -71.059773,
       *     ]);
       *     const map = Maps.newStaticMap().addPath(polyline);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addPath(String)
       * @param polyline An encoded polyline.
       */
      addPath(polyline: string): StaticMap;

      /**
       * Adds a new point (lat/lng) to the current path definition.
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const map = Maps.newStaticMap()
       *                     .beginPath()
       *                     .addPoint(40.714353, -74.005973)
       *                     .addPoint(42.358431, -71.059773)
       *                     .endPath();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addPoint(Number,Number)
       * @param latitude The latitude of the point.
       * @param longitude The longitude of the point.
       */
      addPoint(latitude: number, longitude: number): StaticMap;

      /**
       * Adds a point (lat/lng) location that must be visible in the map.
       *
       *     // Creates a map where New York and Boston are visible.
       *     const map = Maps.newStaticMap()
       *                     .addVisible(40.714353, -74.005973)
       *                     .addVisible(42.358431, -71.059773);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addVisible(Number,Number)
       * @param latitude The latitude of the point.
       * @param longitude The longitude of the point.
       */
      addVisible(latitude: number, longitude: number): StaticMap;

      /**
       * Adds an address location that must be visible in the map.
       *
       *     // Creates a map where New York and Boston are visible.
       *     const map =
       *         Maps.newStaticMap().addVisible('New York, NY').addVisible('Boston, MA');
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#addVisible(String)
       * @param address An address that must be visible in the map.
       */
      addVisible(address: string): StaticMap;

      /**
       * Starts a new path definition. Calls to addAddress() and addPoint() define each new vertex in the path. The path is completed when endPath() is called.
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const map = Maps.newStaticMap()
       *                     .beginPath()
       *                     .addAddress('New York, NY')
       *                     .addAddress('Boston, MA')
       *                     .endPath();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#beginPath()
       */
      beginPath(): StaticMap;

      /**
       * Clears the current set of markers.
       *
       *     const map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all markers on the map.
       *     map.clearMarkers();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#clearMarkers()
       */
      clearMarkers(): StaticMap;

      /**
       * Clear the current set of paths.
       *
       *     const map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all paths on the map.
       *     map.clearPaths();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#clearPaths()
       */
      clearPaths(): StaticMap;

      /**
       * Clears the current set of visible locations.
       *
       *     const map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all visible locations created with addVisible().
       *     map.clearVisibles();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#clearVisibles()
       */
      clearVisibles(): StaticMap;

      /**
       * Completes a path definition started with beginPath().
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     const map = Maps.newStaticMap()
       *                     .beginPath()
       *                     .addAddress('New York, NY')
       *                     .addAddress('Boston, MA')
       *                     .endPath();
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#endPath()
       */
      endPath(): StaticMap;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".
       * To view the daily quotas for conversions, see Quotas for Google Services. Newly created Google Workspace domains might be temporarily subject to stricter quotas.
       *
       * Return:
       * - Blob — The data as a blob.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid. For a Google Docs document, 'text/markdown' is also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Gets the image data as a Blob.
       *
       *     // Creates a map centered on Times Square and saves it to Google Drive.
       *     const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     DriveApp.createFile(map);  // You can call map.getBlob() explicitly or use it
       *     // implicitly by passing the map where a blob is expected.
       *
       * Return:
       * - Blob — An image of the map in the selected image format.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the raw image data as a byte array.
       * In general, prefer using getBlob() which allows for simpler interactions with other services.
       *
       *     // Creates a map centered on Times Square and saves it to Google Drive.
       *     const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     DriveApp.createFile(
       *         Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'),
       *     );
       *
       * Return:
       * - Byte[] — An image of the map in the selected image format.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#getMapImage()
       */
      getMapImage(): Byte[];

      /**
       * Gets the URL of the map image.
       *
       *     // Creates a map centered on Times Square and gets the URL.
       *     const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     // All static map URLs require an API key.
       *     Logger.log(`${map.getMapUrl()}&key=YOUR_API_KEY`);
       *
       * Return:
       * - String — URL The map image URL.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#getMapUrl()
       */
      getMapUrl(): string;

      /**
       * Sets the center of the map using a point (lat/lng).
       *
       *     // Creates a map centered on Times Square, using its coordinates.
       *     const map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setCenter(Number,Number)
       * @param latitude The latitude of the center.
       * @param longitude The longitude of the center.
       */
      setCenter(latitude: number, longitude: number): StaticMap;

      /**
       * Sets the center of the map using an address.
       *
       *     // Creates a map centered on Times Square, using its address.
       *     const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setCenter(String)
       * @param address The address of the center.
       */
      setCenter(address: string): StaticMap;

      /**
       * Sets the custom marker image to use when creating new markers. Markers that have already been added are not affected.
       *
       *     // Creates a map with markers set to be medium sized, black, and labeled with
       *     // the number "1".
       *     const map = Maps.newStaticMap().setCustomMarkerStyle(
       *         'http://www.example.com/marker.png',
       *         false,
       *     );
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setCustomMarkerStyle(String,Boolean)
       * @param imageUrl Specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG or GIF formats, though PNG is recommended.
       * @param useShadow Indicates that the marker should have a shadow generated, based on the image's visible region and its opacity/transparency.
       */
      setCustomMarkerStyle(imageUrl: string, useShadow: boolean): StaticMap;

      /**
       * Sets the format of the map image.
       *
       *     // Creates a map with the image format set to PNG.
       *     const map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setFormat(String)
       * @param format A constant value from Format.
       */
      setFormat(format: string): StaticMap;

      /**
       * Sets the language to be used for text on the map (where available).
       *
       *     // Creates a map with the language set to French.
       *     const map = Maps.newStaticMap().setLanguage('fr');
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Language Support in Google Maps APIs
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setLanguage(String)
       * @param language A BCP-47 language identifier.
       */
      setLanguage(language: string): StaticMap;

      /**
       * Sets the type of map to be shown.
       *
       *     // Creates a satellite map.
       *     const map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setMapType(String)
       * @param mapType A constant value from Type.
       */
      setMapType(mapType: string): StaticMap;

      /**
       * Sets the marker style to use when creating new markers. Markers that have already been added are not affected.
       *
       *     // Creates a map with markers set to be medium sized, black, and labeled with
       *     // the number "1".
       *     const map = Maps.newStaticMap().setMarkerStyle(
       *         Maps.StaticMap.MarkerSize.MID,
       *         Maps.StaticMap.Color.BLACK,
       *         '1',
       *     );
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setMarkerStyle(String,String,String)
       * @param size A constant value from MarkerSize.
       * @param color A string in the format "0xrrggbb" or a constant value from Color.
       * @param label A string containing a single character A-Z or 0-9.
       */
      setMarkerStyle(size: string, color: string, label: string): StaticMap;

      /**
       * Sets whether or not to use specialized tile sets for mobile devices.
       *
       *     // Creates a map that uses mobile-friendly tiles.
       *     const map = Maps.newStaticMap().setMobile(true);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setMobile(Boolean)
       * @param useMobileTiles Whether or not to use mobile tiles.
       */
      setMobile(useMobileTiles: boolean): StaticMap;

      /**
       * Sets the path style to use when creating new paths. Paths that have already been added are not affected.
       *
       *     // Creates a map with paths set to be 1 pixel wide with a black line and a white
       *     // fill.
       *     const map = Maps.newStaticMap().setPathStyle(
       *         1,
       *         Maps.StaticMap.Color.BLACK,
       *         'red',
       *     );
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setPathStyle(Integer,String,String)
       * @param weight The width of lines in pixels.
       * @param color The line color, as a string in the format "0xrrggbb" or a constant value from Color.
       * @param fillColor The fill color, a string in the format "0xrrggbb" or a constant value from Color.
       */
      setPathStyle(weight: Integer, color: string, fillColor: string): StaticMap;

      /**
       * Sets the width and height of the map image in pixels.
       *
       *     // Creates a map 400px wide by 300px high.
       *     const map = Maps.newStaticMap().setSize(400, 300);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setSize(Integer,Integer)
       * @param width The width of the image in pixels.
       * @param height The height of the image in pixels.
       */
      setSize(width: Integer, height: Integer): StaticMap;

      /**
       * Sets the zoom factor, or magnification level, used for the map.
       *
       *     // Creates a map with a zoom factor of 10.
       *     const map = Maps.newStaticMap().setZoom(10);
       *
       * Return:
       * - StaticMap — This map instance, for chaining.
       *
       * - Google Static Maps API
       *
       * https://developers.google.com/apps-script/reference/maps/static-map#setZoom(Integer)
       * @param zoom A value from zero to 21, inclusive.
       */
      setZoom(zoom: Integer): StaticMap;
    }
    /**
     * A collection of enums used by StaticMap.
     */
    interface StaticMapEnums {
      Color: typeof Color;
      Format: typeof Format;
      MarkerSize: typeof MarkerSize;
      Type: typeof Type;
    }
    /**
     * An enum representing the type of map to render.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * Maps.Type.ROADMAP.
     * See also
     *
     * Google Static Maps API
     */
    enum Type { ROADMAP, SATELLITE, TERRAIN, HYBRID }
  }
}

declare var Maps: GoogleAppsScript.Maps.Maps;
