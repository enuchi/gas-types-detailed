// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Maps {
    /**
     * An enum representing the types of restrictions to avoid when finding directions.
     */
    enum Avoid { TOLLS, HIGHWAYS }
    /**
     * An enum representing the named colors available to use in map images.
     */
    enum Color { BLACK, BROWN, GREEN, PURPLE, YELLOW, BLUE, GRAY, ORANGE, RED, WHITE }
    /**
     * Allows for the retrieval of directions between locations.
     * The example below shows how you can use this class to get the directions from Times Square to
     * Central Park, stopping first at Lincoln Center, plot the locations and path on a map, and send
     * the map in an email.
     *
     *     // Get the directions.
     *     var directions = Maps.newDirectionFinder()
     *         .setOrigin('Times Square, New York, NY')
     *         .addWaypoint('Lincoln Center, New York, NY')
     *         .setDestination('Central Park, New York, NY')
     *         .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *         .getDirections();
     *     var route = directions.routes[0];
     *
     *     // Set up marker styles.
     *     var markerSize = Maps.StaticMap.MarkerSize.MID;
     *     var markerColor = Maps.StaticMap.Color.GREEN
     *     var markerLetterCode = 'A'.charCodeAt();
     *
     *     // Add markers to the map.
     *     var map = Maps.newStaticMap();
     *     for (var i = 0; i < route.legs.length; i++) {
     *       var leg = route.legs[i];
     *       if (i == 0) {
     *         // Add a marker for the start location of the first leg only.
     *         map.setMarkerStyle(markerSize, markerColor, String.fromCharCode(markerLetterCode));
     *         map.addMarker(leg.start_location.lat, leg.start_location.lng);
     *         markerLetterCode++;
     *       }
     *       map.setMarkerStyle(markerSize, markerColor, String.fromCharCode(markerLetterCode));
     *       map.addMarker(leg.end_location.lat, leg.end_location.lng);
     *       markerLetterCode++;
     *     }
     *
     *     // Add a path for the entire route.
     *     map.addPath(route.overview_polyline.points);
     *
     *     // Send the map in an email.
     *     var toAddress = Session.getActiveUser().getEmail();
     *     MailApp.sendEmail(
     *       toAddress,
     *       'Directions',
     *       'Please open: ' + map.getMapUrl() + '&key=YOUR_API_KEY', {
     *         htmlBody: 'See below.<br/><img src="cid:mapImage">',
     *         inlineImages: {
     *           mapImage: Utilities.newBlob(map.getMapImage(), 'image/png')
     *         }
     *       }
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
       *
       *     // Creates a DirectionFinder with a wapoint at Lincoln Center.
       *     var directionFinder = Maps.newDirectionFinder().addWaypoint(40.772628, -73.984243);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#addWaypoint(Number,Number)
       * @param latitude Latitude of the waypoint.
       * @param longitude Longitude of the waypoint.
       */
      addWaypoint(latitude: number, longitude: number): DirectionFinder;

      /**
       * Adds a waypoint that the route must pass through, using an address.
       *
       *
       *     // Creates a DirectionFinder with a wapoint at Lincoln Center.
       *     var directionFinder = Maps.newDirectionFinder().addWaypoint('Lincoln Center, New York, NY');
       * https://developers.google.com/apps-script/reference/maps/direction-finder#addWaypoint(String)
       * @param address An address.
       */
      addWaypoint(address: string): DirectionFinder;

      /**
       * Clears the current set of waypoints.
       *
       *
       *     var directionFinder = Maps.newDirectionFinder()
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all waypoints added with addWaypoint().
       *     directionFinder.clearWaypoints();
       * https://developers.google.com/apps-script/reference/maps/direction-finder#clearWaypoints()
       */
      clearWaypoints(): DirectionFinder;

      /**
       * Gets the directions using the origin, destination, and other options that were set.
       *
       *
       *     // Logs how long it would take to walk from Times Square to Central Park.
       *     var directions = Maps.newDirectionFinder()
       *         .setOrigin('Times Square, New York, NY')
       *         .setDestination('Central Park, New York, NY')
       *         .setMode(Maps.DirectionFinder.Mode.WALKING)
       *         .getDirections();
       *     Logger.log(directions.routes[0].legs[0].duration.text);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#getDirections()
       */
      getDirections(): object;

      /**
       * Sets whether or not alternative routes should be returned, instead of just the highest ranked
       * route (defaults to false). If true, the resulting object's routes array may
       * contain multiple entries.
       *
       *
       *     // Creates a DirectionFinder with alernative routes enabled.
       *     var directionFinder = Maps.newDirectionFinder().setAlternatives(true);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setAlternatives(Boolean)
       * @param useAlternatives true to return alternative routes, false otherwise
       */
      setAlternatives(useAlternatives: boolean): DirectionFinder;

      /**
       * Sets the desired time of arrival (when applicable).
       *
       *
       *     // Creates a DirectionFinder with an arrival time of 2 hours from now.
       *     var now = new Date();
       *     var arrive = new Date(now.getTime() + (2 * 60 * 60 * 1000));
       *     var directionFinder = Maps.newDirectionFinder().setArrive(arrive);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setArrive(Date)
       * @param time the time of arrival
       */
      setArrive(time: Date): DirectionFinder;

      /**
       * Sets whether to avoid certain types of restrictions.
       *
       *
       *     // Creates a DirectionFinder that avoid highways.
       *     var directionFinder = Maps.newDirectionFinder().setAvoid(Maps.DirectionFinder.Avoid.HIGHWAYS);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setAvoid(String)
       * @param avoid a constant value from Avoid
       */
      setAvoid(avoid: string): DirectionFinder;

      /**
       * Sets the desired time of departure (when applicable).
       *
       *
       *     // Creates a DirectionFinder with a departure time of 1 hour from now.
       *     var now = new Date();
       *     var depart = new Date(now.getTime() + (1 * 60 * 60 * 1000));
       *     var directionFinder = Maps.newDirectionFinder().setDepart(depart);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDepart(Date)
       * @param time the time of departure
       */
      setDepart(time: Date): DirectionFinder;

      /**
       * Sets the ending location for which to calculate directions to, using a point (lat/lng).
       *
       *
       *     // Creates a DirectionFinder with the destination set to Central Park.
       *     var directionFinder = Maps.newDirectionFinder().setDestination(40.777052, -73.975464);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDestination(Number,Number)
       * @param latitude the latitude of the ending location
       * @param longitude the longitude of the ending location
       */
      setDestination(latitude: number, longitude: number): DirectionFinder;

      /**
       * Sets the ending location for which to calculate directions to, using an address.
       *
       *
       *     // Creates a DirectionFinder with the destination set to Central Park.
       *     var directionFinder = Maps.newDirectionFinder().setDestination('Central Park, New York, NY');
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setDestination(String)
       * @param address the ending address
       */
      setDestination(address: string): DirectionFinder;

      /**
       * Sets the language to be used for the directions.
       *
       *
       *     // Creates a DirectionFinder with the language set to French.
       *     var directionFinder = Maps.newDirectionFinder().setLanguage('fr');
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setLanguage(String)
       * @param language a BCP-47 language identifier
       */
      setLanguage(language: string): DirectionFinder;

      /**
       * Sets the mode of travel (defaults to driving).
       *
       *
       *     // Creates a DirectionFinder with the mode set to walking.
       *     var directionFinder = Maps.newDirectionFinder().setMode(Maps.DirectionFinder.Mode.WALKING);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setMode(String)
       * @param mode a constant value from Mode
       */
      setMode(mode: string): DirectionFinder;

      /**
       * Sets whether or not to optimize the provided route by rearranging the waypoints in a more
       * efficient order (defaults to false).
       *
       *
       *     // Creates a DirectionFinder with wapoint optimization enabled.
       *     var directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOptimizeWaypoints(Boolean)
       * @param optimizeOrder true to optimize the order, or false otherwise
       */
      setOptimizeWaypoints(optimizeOrder: boolean): DirectionFinder;

      /**
       * Sets the starting location from which to calculate directions, using a point (lat/lng).
       *
       *
       *     // Creates a DirectionFinder with the origin set to Times Square.
       *     var directionFinder = Maps.newDirectionFinder().setOrigin(40.759011, -73.984472);
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOrigin(Number,Number)
       * @param latitude the latitude of the starting location
       * @param longitude the longitude of the starting location
       */
      setOrigin(latitude: number, longitude: number): DirectionFinder;

      /**
       * Sets the starting location from which to calculate directions, using an address.
       *
       *
       *     // Creates a DirectionFinder with the origin set to Times Square.
       *     var directionFinder = Maps.newDirectionFinder().setOrigin('Times Square, New York, NY');
       * https://developers.google.com/apps-script/reference/maps/direction-finder#setOrigin(String)
       * @param address the starting address
       */
      setOrigin(address: string): DirectionFinder;

      /**
       * Sets a region to use when interpreting location names. The supported region codes correspond to
       * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
       * "maps.google.co.uk".
       *
       *
       *     // Creates a DirectionFinder with the region set to France.
       *     var directionFinder = Maps.newDirectionFinder().setRegion('fr');
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
     *     var directions = Maps.newDirectionFinder()
     *         .setOrigin('Denver, CO')
     *         .setDestination('Grand Junction, CO')
     *         .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *         .getDirections();
     *     var route = directions.routes[0];
     *
     *     // Get elevation samples along the route.
     *     var numberOfSamples = 30;
     *     var response = Maps.newElevationSampler()
     *         .samplePath(route.overview_polyline.points, numberOfSamples)
     *
     *     // Determine highest point.
     *     var maxElevation = Number.MIN_VALUE;
     *     var highestPoint = null;
     *     for (var i = 0; i < response.results.length; i++) {
     *       var sample = response.results[i];
     *       if (sample.elevation > maxElevation) {
     *         maxElevation = sample.elevation;
     *         highestPoint = sample.location;
     *       }
     *     }
     *
     *     // Add the path and marker to a map.
     *     var map = Maps.newStaticMap()
     *         .addPath(route.overview_polyline.points)
     *         .addMarker(highestPoint.lat, highestPoint.lng);
     *
     *     // Save the map to your drive
     *     DocsList.createFile(Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'));
     *
     * See also
     *
     * Google Elevation API
     */
    interface ElevationSampler {

      /**
       * Returns elevation data for a single point (lat/lng).
       *
       *
       *     // Gets the elevation of Times Square using a point.
       *     var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
       *     Logger.log(data.results[0].elevation);
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocation(Number,Number)
       * @param latitude the latitude of the point to sample
       * @param longitude the longitude of the point to sample
       */
      sampleLocation(latitude: number, longitude: number): object;

      /**
       * Returns elevation data for a series of points (lat/lng).
       *
       *
       *     // Gets the elevation of Times Square and Central Park using points.
       *     var data = Maps.newElevationSampler().sampleLocations([
       *         // Times Square
       *         40.759011, -73.984472,
       *         // Central Park
       *         40.777052, -73.975464
       *     ]);
       *     Logger.log('Times Square: ' + data.results[0].elevation);
       *     Logger.log('Central Park: ' + data.results[1].elevation);
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocations(Number)
       * @param points an array of latitude/longitude pairs
       */
      sampleLocations(points: number[]): object;

      /**
       * Returns elevation data for the points in an encoded polyline.
       *
       *
       *     // Gets the elevation of Times Square and Central Park using a polyline.
       *     var data = Maps.newElevationSampler().sampleLocations('yvwwF|aqbMwoBiw@');
       *     Logger.log('Times Square: ' + data.results[0].elevation);
       *     Logger.log('Central Park: ' + data.results[1].elevation);
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#sampleLocations(String)
       * @param encodedPolyline an encoded polyline of points to sample
       */
      sampleLocations(encodedPolyline: string): object;

      /**
       * Returns elevation data for a number of samples along a line, defined using a series of points.
       *
       *
       *     // Gets the elevation of five points between Times Square and Central Park.
       *     var data = Maps.newElevationSampler().samplePath([
       *         // Times Square
       *         40.759011, -73.984472,
       *         // Central Park
       *         40.777052, -73.975464
       *     ], 5);
       *     for (var i = 0; i < data.results.length; i++) {
       *       Logger.log(data.results[i].elevation);
       *     }
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#samplePath(Number,Integer)
       * @param points an array of latitude/longitude pairs defining a path to sample over
       * @param numSamples the number of points to sample along the path of points
       */
      samplePath(points: number[], numSamples: Integer): object;

      /**
       * Returns elevation data for a number of samples along a line, defined using an encoded polyline.
       *
       *
       *     // Gets the elevation of five points between Times Square and Central Park.
       *     var data = Maps.newElevationSampler().samplePath('yvwwF|aqbMwoBiw@', 5);
       *     for (var i = 0; i < data.results.length; i++) {
       *       Logger.log(data.results[i].elevation);
       *     }
       * https://developers.google.com/apps-script/reference/maps/elevation-sampler#samplePath(String,Integer)
       * @param encodedPolyline an encoded polyline of points defining a path to sample over
       * @param numSamples the number of points to sample along the path of points
       */
      samplePath(encodedPolyline: string, numSamples: Integer): object;
    }
    /**
     * An enum representing the format of the map image.
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
     *     var response = Maps.newGeocoder()
     *         // The latitudes and longitudes of southwest and northeast corners of Colorado, respectively.
     *         .setBounds(36.998166, -109.045486, 41.001666,-102.052002)
     *         .geocode('Main St');
     *
     *     // Create a Google Doc and map.
     *     var doc = DocumentApp.create('My Map');
     *     var map = Maps.newStaticMap();
     *
     *     // Add each result to the map and doc.
     *     for (var i = 0; i < response.results.length && i < 9; i++) {
     *       var result = response.results[i];
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
       *
       *     // Gets the geographic coordinates for Times Square.
       *     var response = Maps.newGeocoder().geocode('Times Square, New York, NY');
       *     for (var i = 0; i < response.results.length; i++) {
       *       var result = response.results[i];
       *       Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
       *           result.geometry.location.lng);
       *     }
       * https://developers.google.com/apps-script/reference/maps/geocoder#geocode(String)
       * @param address an address
       */
      geocode(address: string): object;

      /**
       * Gets the approximate addresses for a given geographic point.
       *
       *
       *     // Gets the address of a point in Times Square.
       *     var response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
       *     for (var i = 0; i < response.results.length; i++) {
       *       var result = response.results[i];
       *       Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
       *           result.geometry.location.lng);
       *     }
       * https://developers.google.com/apps-script/reference/maps/geocoder#reverseGeocode(Number,Number)
       * @param latitude the latitude of the point
       * @param longitude the longitude of the point
       */
      reverseGeocode(latitude: number, longitude: number): object;

      /**
       * Gets the approximate addresses for a given area.
       *
       *
       *     // Gets the address of an area around Central Park.
       *     var response = Maps.newGeocoder().reverseGeocode(40.764941, -73.98262, 40.799133, -73.947558);
       *     for (var i = 0; i < response.results.length; i++) {
       *       var result = response.results[i];
       *       Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
       *           result.geometry.location.lng);
       *     }
       * https://developers.google.com/apps-script/reference/maps/geocoder#reverseGeocode(Number,Number,Number,Number)
       * @param swLatitude the latitude of the south west corner of the bounds
       * @param swLongitude the longitude of the south west corner of the bounds
       * @param neLatitude the latitude of the north east corner of the bounds
       * @param neLongitude the longitude of the north east corner of the bounds
       */
      reverseGeocode(swLatitude: number, swLongitude: number, neLatitude: number, neLongitude: number): object;

      /**
       * Sets the bounds of an area that should be given extra preference in the results.
       *
       *
       *     // Creates a Geocoder that prefers points in the area of Manhattan.
       *     var geocoder = Maps.newGeocoder()
       *         .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
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
       *
       *     // Creates a Geocoder with the language set to French.
       *     var geocoder = Maps.newGeocoder().setLanguage('fr');
       * https://developers.google.com/apps-script/reference/maps/geocoder#setLanguage(String)
       * @param language a BCP-47 language identifier
       */
      setLanguage(language: string): Geocoder;

      /**
       * Sets a region to use when interpreting location names. The supported region codes correspond to
       * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
       * "maps.google.co.uk".
       *
       *
       *     // Creates a Geocoder with the region set to France.
       *     var geocoder = Maps.newGeocoder().setRegion('fr');
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
       *
       *     // Decodes a string representation of the latitudes and longitudes of Minneapolis and Milwaukee
       *     // respectively.
       *     var polyline = 'qvkpG`qhxPbgyI_zq_@';
       *     var points = Maps.decodePolyline(polyline);
       *     for (var i = 0; i < points.length; i+= 2) {
       *       Logger.log('%s, %s', points[i], points[i+1]);
       *     }
       * https://developers.google.com/apps-script/reference/maps/maps#decodePolyline(String)
       * @param polyline An encoded polyline to decode.
       */
      decodePolyline(polyline: string): number[];

      /**
       * Encodes an array of points into a string.
       *
       *
       *     // The latitudes and longitudes of New York and Boston respectively.
       *     var points = [40.77, -73.97, 42.34, -71.04];
       *     var polyline = Maps.encodePolyline(points);
       * https://developers.google.com/apps-script/reference/maps/maps#encodePolyline(Number)
       * @param points An array of latitude/longitude pairs to encode.
       */
      encodePolyline(points: number[]): string;

      /**
       * Creates a new DirectionFinder object.
       * https://developers.google.com/apps-script/reference/maps/maps#newDirectionFinder()
       */
      newDirectionFinder(): DirectionFinder;

      /**
       * Creates an ElevationSampler object.
       * https://developers.google.com/apps-script/reference/maps/maps#newElevationSampler()
       */
      newElevationSampler(): ElevationSampler;

      /**
       * Creates a new Geocoder object.
       * https://developers.google.com/apps-script/reference/maps/maps#newGeocoder()
       */
      newGeocoder(): Geocoder;

      /**
       * Creates a new StaticMap object.
       * https://developers.google.com/apps-script/reference/maps/maps#newStaticMap()
       */
      newStaticMap(): StaticMap;

      /**
       * Enables the use of an externally established Google Maps APIs Premium Plan account,
       * to leverage additional quota
       * allowances. Your client ID and signing key can be obtained from the Google Enterprise
       * Support Portal. Set these values to null to go back to using the default quota
       * allowances.
       *
       *
       *
       *
       * https://developers.google.com/apps-script/reference/maps/maps#setAuthentication(String,String)
       * @param clientId A client identifier.
       * @param signingKey A private signing key.
       */
      setAuthentication(clientId: string, signingKey: string): void;
    }
    /**
     * An enum representing the size of a marker added to a map.
     * See also
     *
     * Google Static Maps API
     */
    enum MarkerSize { TINY, MID, SMALL }
    /**
     * An enum representing the mode of travel to use when finding directions.
     */
    enum Mode { DRIVING, WALKING, BICYCLING, TRANSIT }
    /**
     * Allows for the creation and decoration of static map images.
     *
     * The example below shows how you can use this class to create a map of New York City's Theatre
     * District, including nearby train stations, and display it in a simple web app.
     *
     *     // Create a map centered on Times Square.
     *     var map = Maps.newStaticMap()
     *         .setSize(600, 600)
     *         .setCenter('Times Square, New York, NY');
     *
     *     // Add markers for the nearbye train stations.
     *     map.setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.RED, 'T');
     *     map.addMarker('Grand Central Station, New York, NY');
     *     map.addMarker('Penn Station, New York, NY');
     *
     *     // Show the boundaries of the Theatre District.
     *     var corners = [
     *       '8th Ave & 53rd St, New York, NY',
     *       '6th Ave & 53rd St, New York, NY',
     *       '6th Ave & 40th St, New York, NY',
     *       '8th Ave & 40th St, New York, NY'
     *     ];
     *     map.setPathStyle(4, Maps.StaticMap.Color.BLACK, Maps.StaticMap.Color.BLUE);
     *     map.beginPath();
     *     for (var i = 0; i < corners.length; i++) {
     *       map.addAddress(corners[i]);
     *     }
     *     // All static map URLs require an API key.
     *     var url = map.getMapUrl() + "&key=YOUR_API_KEY";
     *
     * See also
     *
     * Google Static Maps API
     */
    interface StaticMap {

      /**
       * Adds a new address to the current path definition.
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var map = Maps.newStaticMap()
       *         .beginPath()
       *         .addAddress('New York, NY')
       *         .addAddress('Boston, MA')
       *         .endPath();
       * https://developers.google.com/apps-script/reference/maps/static-map#addAddress(String)
       * @param address An address to add.
       */
      addAddress(address: string): StaticMap;

      /**
       * Adds a marker to the map using a point (lat/lng).
       *
       *
       *     // Creates a map and adds a marker at the specified coordinates.
       *     var map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
       * https://developers.google.com/apps-script/reference/maps/static-map#addMarker(Number,Number)
       * @param latitude The latitude of the new marker.
       * @param longitude The longitude of the new marker.
       */
      addMarker(latitude: number, longitude: number): StaticMap;

      /**
       * Adds a marker to the map using an address.
       *
       *
       *     // Creates a map and adds a marker at the specified address.
       *     var map = Maps.newStaticMap().addMarker('76 9th Ave, New York NY');
       * https://developers.google.com/apps-script/reference/maps/static-map#addMarker(String)
       * @param address The address at wich to place the new marker.
       */
      addMarker(address: string): StaticMap;

      /**
       * Adds a path to the map using an array of points.
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var map = Maps.newStaticMap()
       *         .addPath([40.714353, -74.005973, 42.358431, -71.059773]);
       * https://developers.google.com/apps-script/reference/maps/static-map#addPath(Number)
       * @param points An array of latitude/longitude pairs that define the path.
       */
      addPath(points: number[]): StaticMap;

      /**
       * Adds a path to the map using an encoded polyline.
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var polyline = Maps.encodePolyline([40.714353, -74.005973, 42.358431, -71.059773]);
       *     var map = Maps.newStaticMap().addPath(polyline);
       * https://developers.google.com/apps-script/reference/maps/static-map#addPath(String)
       * @param polyline An encoded polyline.
       */
      addPath(polyline: string): StaticMap;

      /**
       * Adds a new point (lat/lng) to the current path definition.
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var map = Maps.newStaticMap()
       *         .beginPath()
       *         .addPoint(40.714353, -74.005973)
       *         .addPoint(42.358431, -71.059773)
       *         .endPath();
       * https://developers.google.com/apps-script/reference/maps/static-map#addPoint(Number,Number)
       * @param latitude The latitude of the point.
       * @param longitude The longitude of the point.
       */
      addPoint(latitude: number, longitude: number): StaticMap;

      /**
       * Adds a point (lat/lng) location that must be visible in the map.
       *
       *
       *     // Creates a map where New York and Boston are visible.
       *     var map = Maps.newStaticMap()
       *         .addVisible(40.714353, -74.005973);
       *         .addVisible(42.358431, -71.059773)
       * https://developers.google.com/apps-script/reference/maps/static-map#addVisible(Number,Number)
       * @param latitude The latitude of the point.
       * @param longitude The longitude of the point.
       */
      addVisible(latitude: number, longitude: number): StaticMap;

      /**
       * Adds an address location that must be visible in the map.
       *
       *
       *     // Creates a map where New York and Boston are visible.
       *     var map = Maps.newStaticMap()
       *         .addVisible('New York, NY')
       *         .addVisible('Boston, MA');
       * https://developers.google.com/apps-script/reference/maps/static-map#addVisible(String)
       * @param address An address that must be visible in the map.
       */
      addVisible(address: string): StaticMap;

      /**
       * Starts a new path definition. Calls to addAddress() and addPoint() define each
       * new vertex in the path. The path is completed when endPath() is called.
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var map = Maps.newStaticMap()
       *         .beginPath()
       *         .addAddress('New York, NY')
       *         .addAddress('Boston, MA')
       *         .endPath();
       * https://developers.google.com/apps-script/reference/maps/static-map#beginPath()
       */
      beginPath(): StaticMap;

      /**
       * Clears the current set of markers.
       *
       *
       *     var map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all markers on the map.
       *     map.clearMarkers();
       * https://developers.google.com/apps-script/reference/maps/static-map#clearMarkers()
       */
      clearMarkers(): StaticMap;

      /**
       * Clear the current set of paths.
       *
       *
       *     var map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all paths on the map.
       *     map.clearPaths();
       * https://developers.google.com/apps-script/reference/maps/static-map#clearPaths()
       */
      clearPaths(): StaticMap;

      /**
       * Clears the current set of visible locations.
       *
       *
       *     var map = Maps.newStaticMap();
       *     // ...
       *     // Do something interesting here ...
       *     // ...
       *     // Remove all visible locations created with addVisible().
       *     map.clearVisibles();
       * https://developers.google.com/apps-script/reference/maps/static-map#clearVisibles()
       */
      clearVisibles(): StaticMap;

      /**
       * Completes a path definition started with beginPath().
       *
       *
       *     // Creates a map and adds a path from New York to Boston.
       *     var map = Maps.newStaticMap()
       *         .beginPath()
       *         .addAddress('New York, NY')
       *         .addAddress('Boston, MA')
       *         .endPath();
       * https://developers.google.com/apps-script/reference/maps/static-map#endPath()
       */
      endPath(): StaticMap;

      /**
       * Return the data inside this object as a blob converted to the specified content type. This
       * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
       * assumes that the part of the filename that follows the last period (if any) is an existing
       * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
       * "ShoppingList.12.25.pdf".
       * https://developers.google.com/apps-script/reference/maps/static-map#getAs(String)
       * @param contentType The MIME type to convert to. For most blobs, 'application/pdf' is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of 'image/bmp', 'image/gif', 'image/jpeg', or 'image/png' are also valid.
       */
      getAs(contentType: string): Base.Blob;

      /**
       * Gets the image data as a Blob.
       *
       *
       *     // Creates a map centered on Times Square and saves it to Google Drive.
       *     var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     DocsList.createFile(map);  // You can call map.getBlob() explicitly or use it
       *                                // implicitly by passing the map where a blob is expected.
       * https://developers.google.com/apps-script/reference/maps/static-map#getBlob()
       */
      getBlob(): Base.Blob;

      /**
       * Gets the raw image data as a byte array.
       *
       *
       * In general, prefer using getBlob() which allows for simpler interactions with other
       * services.
       *
       *
       *     // Creates a map centered on Times Square and saves it to Google Drive.
       *     var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     DocsList.createFile(Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'));
       * https://developers.google.com/apps-script/reference/maps/static-map#getMapImage()
       */
      getMapImage(): Byte[];

      /**
       * Gets the URL of the map image.
       *
       *
       *     // Creates a map centered on Times Square and gets the URL.
       *     var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       *     // All static map URLs require an API key.
       *     Logger.log(map.getMapUrl() + "&key=YOUR_API_KEY");
       * https://developers.google.com/apps-script/reference/maps/static-map#getMapUrl()
       */
      getMapUrl(): string;

      /**
       * Sets the center of the map using a point (lat/lng).
       *
       *
       *     // Creates a map centered on Times Square, using its coordinates.
       *     var map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
       * https://developers.google.com/apps-script/reference/maps/static-map#setCenter(Number,Number)
       * @param latitude The latitude of the center.
       * @param longitude The longitude of the center.
       */
      setCenter(latitude: number, longitude: number): StaticMap;

      /**
       * Sets the center of the map using an address.
       *
       *
       *     // Creates a map centered on Times Square, using its address.
       *     var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
       * https://developers.google.com/apps-script/reference/maps/static-map#setCenter(String)
       * @param address The address of the center.
       */
      setCenter(address: string): StaticMap;

      /**
       * Sets the custom marker image to use when creating new markers. Markers that have already been
       * added are not affected.
       *
       *
       *     // Creates a map with markers set to be medium sized, black, and labeled with the number "1".
       *     var map = Maps.newStaticMap()
       *         .setCustomMarkerStyle('http://www.example.com/marker.png', false);
       * https://developers.google.com/apps-script/reference/maps/static-map#setCustomMarkerStyle(String,Boolean)
       * @param imageUrl Specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG or GIF formats, though PNG is recommended.
       * @param useShadow Indicates that the marker should have a shadow generated, based on the image's visible region and its opacity/transparency.
       */
      setCustomMarkerStyle(imageUrl: string, useShadow: boolean): StaticMap;

      /**
       * Sets the format of the map image.
       *
       *
       *     // Creates a map with the image format set to PNG.
       *     var map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
       * https://developers.google.com/apps-script/reference/maps/static-map#setFormat(String)
       * @param format A constant value from Format.
       */
      setFormat(format: string): StaticMap;

      /**
       * Sets the language to be used for text on the map (where avaialbe).
       *
       *
       *     // Creates a map with the language set to French.
       *     var map = Maps.newStaticMap().setLanguage('fr');
       * https://developers.google.com/apps-script/reference/maps/static-map#setLanguage(String)
       * @param language A BCP-47 language identifier.
       */
      setLanguage(language: string): StaticMap;

      /**
       * Sets the type of map to be shown.
       *
       *
       *     // Creates a satellite map.
       *     var map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
       * https://developers.google.com/apps-script/reference/maps/static-map#setMapType(String)
       * @param mapType A constant value from Type.
       */
      setMapType(mapType: string): StaticMap;

      /**
       * Sets the marker style to use when creating new markers. Markers that have already been added
       * are not affected.
       *
       *
       *     // Creates a map with markers set to be medium sized, black, and labeled with the number "1".
       *     var map = Maps.newStaticMap()
       *         .setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.BLACK , '1');
       * https://developers.google.com/apps-script/reference/maps/static-map#setMarkerStyle(String,String,String)
       * @param size A constant value from MarkerSize.
       * @param color A string in the format "0xrrggbb" or a constant value from Color.
       * @param label A string containing a single character A-Z or 0-9.
       */
      setMarkerStyle(size: string, color: string, label: string): StaticMap;

      /**
       * Sets whether or not to use specialized tile sets for mobile devices.
       *
       *
       *     // Creates a map that uses mobile-friendly tiles.
       *     var map = Maps.newStaticMap().setMobile(true);
       * https://developers.google.com/apps-script/reference/maps/static-map#setMobile(Boolean)
       * @param useMobileTiles Whether or not to use mobile tiles.
       */
      setMobile(useMobileTiles: boolean): StaticMap;

      /**
       * Sets the path style to use when creating new paths. Paths that have already been added are not
       * affected.
       *
       *
       *     // Creates a map with paths set to be 1 pixel wide with a black line and a white fill.
       *     var map = Maps.newStaticMap()
       *         .setPathStyle(1, Maps.StaticMap.Color.BLACK , 'red');
       * https://developers.google.com/apps-script/reference/maps/static-map#setPathStyle(Integer,String,String)
       * @param weight The width of lines in pixels.
       * @param color The line color, as a string in the format "0xrrggbb" or a constant value from Color.
       * @param fillColor The fill color, a string in the format "0xrrggbb" or a constant value from Color.
       */
      setPathStyle(weight: Integer, color: string, fillColor: string): StaticMap;

      /**
       * Sets the width and height of the map image in pixels.
       *
       *
       *     // Creates a map 400px wide by 300px high.
       *     var map = Maps.newStaticMap().setSize(400, 300);
       * https://developers.google.com/apps-script/reference/maps/static-map#setSize(Integer,Integer)
       * @param width The width of the image in pixels.
       * @param height The height of the image in pixels.
       */
      setSize(width: Integer, height: Integer): StaticMap;

      /**
       * Sets the zoom factor, or magnification level, used for the map.
       *
       *
       *     // Creates a map with a zoom factor of 10.
       *     var map = Maps.newStaticMap().setZoom(10);
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
     * See also
     *
     * Google Static Maps API
     */
    enum Type { ROADMAP, SATELLITE, TERRAIN, HYBRID }
  }
}

declare var Maps: GoogleAppsScript.Maps.Maps;
