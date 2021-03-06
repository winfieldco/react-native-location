import { ConfigureOptions, RequestPermissionOptions, LocationPermissionStatus, Subscription, Location, Heading, GetLatestLocationOptions } from "./types";
import { EventEmitter } from "react-native";
/**
 * Internal method to configure the helps. Useful for Jet testing.
 *
 * @ignore
 * @param {RNLocationNativeInterface} ni Native interface
 * @param {EventEmitter} evt Event emitter
 * @returns {void}
 */
export declare const _configureHelpers: (ni: any, evt: EventEmitter) => void;
/**
 * This is used to configure the location provider. You can use this to enable background mode, filter location updates to a certain distance change, and ensure you have the power settings set correctly for your use case.
 *
 * You can call `configure` multiple times at it will only change the setting which you pass to it. For example, if you only want to change `activityType`, you can call `configure` with just that property present.
 *
 * @param {ConfigureOptions} options The configuration options.
 * @returns {void}
 */
export declare const configure: (options: ConfigureOptions) => void;
/**
 * Correctly managing permissions is key to working with the users location in mobile apps.
 *
 * * Ask for the lowest level of permissions you can. You'll almost always only need `whenInUse` (foreground) permission rather than background.
 * * On iOS you only get one chance to ask for permission. If the user requests it the first time this method will always resolves to `false`.
 * * If you ask for `always` permission then the user gets the chance to accept, but only give you `whenInUse` permission. The Promise will still resolve to `false`, however, if you call `RNLocation.getCurrentPermission` you can check if they actually accepted the lesser permission.
 * * You should monitor the permissions and respond to it correctly. The user is able to go to their phone setting and revoke or downgrade permissions at any time.
 *
 * This method should be called before subscribing to location updates. You need to pass in the type of permission you want for each platform. You can choose not to ignore a platform and it will be ignored. The method returns a promise which resolves to `true` if the permission was granted and `false` if not.
 *
 * @param {RequestPermissionOptions} options The permissions which you are requesting.
 * @returns {Promise<boolean>} A Promise which resolves to `true` if the permission was accepted.
 */
export declare const requestPermission: (options: RequestPermissionOptions) => Promise<boolean>;
/**
 * Gets the current permission status.
 *
 * @returns {Promise<LocationPermissionStatus>} The current permission status.
 */
export declare const getCurrentPermission: () => Promise<LocationPermissionStatus>;
/**
 * Checks that the current location permission matches the given options.
 *
 * @param {RequestPermissionOptions} options The permissions which you are checking.
 * @returns {Promise<boolean>} If the current location permissions match the given options.
 */
export declare const checkPermission: (options: RequestPermissionOptions) => Promise<boolean>;
/**
 * Monitor the permission status for changes.
 *
 * @param {LocationPermissionStatusCallback} listener The listener which will be called when the permission status changes.
 * @returns {Subscription} The subscription function which can be used to unsubscribe.
 */
export declare const subscribeToPermissionUpdates: (listener: (status: LocationPermissionStatus) => void) => Subscription;
/**
 * Subscribe to location changes with the given listener. Ensure you have the correct permission before calling this method. The location provider will respect the settings you have given it.
 *
 * @param  {LocationCallback} listener The listener which will be called when the user location changes.
 * @returns {Subscription} The subscription function which can be used to unsubscribe.
 */
export declare const subscribeToLocationUpdates: (listener: (locations: Location[]) => void) => Subscription;
/**
 * Get the latest location. Ensure you have the correct permission before calling this method.
 *
 * This will subscribe to location events for you at the unsubscribe when it gets its first valid location. Usually, this method will return very fast with a possibly out of date location, however, in some circumstances it will not return a location. Therefore, this method has a timeout after which the promise will be resovled with `null` value.
 *
 * The location provider will respect the settings you have given it, so if you need a location with a certain accuracy, ensure you call `RNLocation.configure` first. If you want *any* location then ensure you call `RNLocation.configure` with no distance filter.
 *
 * @param {GetLatestLocationOptions} options The options to use when getting the location.
 * @returns {Promise<Location | null>} A Promise which will resolve to the latest location, or to `null` if the timeout is reached.
 */
export declare const getLatestLocation: (options?: GetLatestLocationOptions) => Promise<Location | null>;
/**
 * Subscribe to heading changes with the given listener. Ensure you have the correct permission before calling this method. The location provider will respect the settings you have given it.
 *
 * @param  {LocationCallback} listener The listener which will be called when the heading changes.
 * @returns {Subscription} The subscription function which can be used to unsubscribe.
 */
export declare const subscribeToHeadingUpdates: (listener: (heading: Heading) => void) => Subscription;
/**
 * Subscribe to significant updates to the users location with the given listener.
 *
 * **This method does not take into account the {@link distanceFilter} which you configured RNLocation with**.
 *
 * In most cases, you should call {@link configure} with the correct settings and then use {@link subscribeToLocationUpdates} to subscribe to the location updates. For more details, take a look at [Apple's documentation](https://developer.apple.com/documentation/corelocation/cllocationmanager/1423531-startmonitoringsignificantlocati?language=objc).
 *
 * @param  {LocationCallback} listener The listener which will be called when the user location significantly changes.
 * @returns {Subscription} The subscription function which can be used to unsubscribe.
 */
export declare const subscribeToSignificantLocationUpdates: (listener: (locations: Location[]) => void) => Subscription;
declare const _default: {
    configure: (options: ConfigureOptions) => void;
    requestPermission: (options: RequestPermissionOptions) => Promise<boolean>;
    checkPermission: (options: RequestPermissionOptions) => Promise<boolean>;
    getCurrentPermission: () => Promise<LocationPermissionStatus>;
    subscribeToPermissionUpdates: (listener: (status: LocationPermissionStatus) => void) => Subscription;
    subscribeToLocationUpdates: (listener: (locations: Location[]) => void) => Subscription;
    getLatestLocation: (options?: GetLatestLocationOptions) => Promise<Location | null>;
    subscribeToHeadingUpdates: (listener: (heading: Heading) => void) => Subscription;
    subscribeToSignificantLocationUpdates: (listener: (locations: Location[]) => void) => Subscription;
    _configureHelpers: (ni: any, evt: EventEmitter) => void;
    _nativeInterface: any;
    _eventEmitter: EventEmitter;
};
export default _default;
/**
 * @callback LocationPermissionStatusCallback
 * @param {LocationPermissionStatus} status The new permission status.
 */
/**
 * @callback LocationCallback
 * @param {Location} location The new user location.
 */
