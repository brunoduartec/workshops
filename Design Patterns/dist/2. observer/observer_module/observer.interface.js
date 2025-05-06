"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverStatus = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["ERROR"] = "error";
    EventType["WARNING"] = "warning";
    EventType["INFO"] = "info";
})(EventType || (exports.EventType = EventType = {}));
var ObserverStatus;
(function (ObserverStatus) {
    ObserverStatus["ACTIVE"] = "active";
    ObserverStatus["INACTIVE"] = "inactive";
    ObserverStatus["PENDING"] = "pending";
})(ObserverStatus || (exports.ObserverStatus = ObserverStatus = {}));
//# sourceMappingURL=observer.interface.js.map