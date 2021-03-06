"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
/**
 * Internal helper class for managing permissions
 * @ignore
 */
var Permissions = /** @class */ (function () {
    function Permissions(nativeInterface, eventEmitter) {
        this.nativeInterface = nativeInterface;
        this.eventEmitter = eventEmitter;
    }
    Permissions.prototype.requestPermission = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, permissionType, granted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = react_native_1.Platform.OS;
                        switch (_a) {
                            case "ios": return [3 /*break*/, 1];
                            case "android": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 1:
                        if (!(options.ios === "always")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.nativeInterface.requestAlwaysAuthorization()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        if (!(options.ios === "whenInUse")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.nativeInterface.requestWhenInUseAuthorization()];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [2 /*return*/, false];
                    case 6:
                        if (!options.android) {
                            return [2 /*return*/, false];
                        }
                        permissionType = options.android.detail === "fine"
                            ? react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                            : react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION;
                        return [4 /*yield*/, react_native_1.PermissionsAndroid.request(permissionType, options.android.rationale || undefined)];
                    case 7:
                        granted = _b.sent();
                        return [2 /*return*/, granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED];
                    case 8: return [2 /*return*/, false];
                }
            });
        });
    };
    Permissions.prototype.getCurrentPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fine, coarse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = react_native_1.Platform.OS;
                        switch (_a) {
                            case "ios": return [3 /*break*/, 1];
                            case "android": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 6];
                    case 1: return [4 /*yield*/, this.nativeInterface.getAuthorizationStatus()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, react_native_1.PermissionsAndroid.check(react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)];
                    case 4:
                        fine = _b.sent();
                        return [4 /*yield*/, react_native_1.PermissionsAndroid.check(react_native_1.PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)];
                    case 5:
                        coarse = _b.sent();
                        if (fine) {
                            return [2 /*return*/, "authorizedFine"];
                        }
                        else if (coarse) {
                            return [2 /*return*/, "authorizedCoarse"];
                        }
                        else {
                            return [2 /*return*/, "notDetermined"];
                        }
                        _b.label = 6;
                    case 6: 
                    // Platform not supported, so return "restricted" to signal that there's nothing
                    return [2 /*return*/, "restricted"];
                }
            });
        });
    };
    Permissions.prototype.checkPermission = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, currentPermission, currentPermission;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = react_native_1.Platform.OS;
                        switch (_a) {
                            case "ios": return [3 /*break*/, 1];
                            case "android": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.nativeInterface.getAuthorizationStatus()];
                    case 2:
                        currentPermission = _b.sent();
                        if (options.ios === "always") {
                            return [2 /*return*/, currentPermission === "authorizedAlways"];
                        }
                        else if (options.ios === "whenInUse") {
                            return [2 /*return*/, (currentPermission === "authorizedAlways" ||
                                    currentPermission === "authorizedWhenInUse")];
                        }
                        return [2 /*return*/, false];
                    case 3:
                        if (!options.android) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.getCurrentPermission()];
                    case 4:
                        currentPermission = _b.sent();
                        if (options.android.detail === "fine") {
                            return [2 /*return*/, currentPermission === "authorizedFine"];
                        }
                        else if (options.android.detail === "coarse") {
                            return [2 /*return*/, (currentPermission === "authorizedFine" ||
                                    currentPermission === "authorizedCoarse")];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    Permissions.prototype.subscribeToPermissionUpdates = function (listener) {
        var emitterSubscription = this.eventEmitter.addListener("authorizationStatusDidChange", listener);
        return function () {
            emitterSubscription.remove();
        };
    };
    return Permissions;
}());
exports.default = Permissions;
//# sourceMappingURL=permissions.js.map