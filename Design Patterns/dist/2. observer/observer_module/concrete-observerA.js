"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverA = void 0;
const observer_interface_1 = require("./observer.interface");
class ConcreteObserverA {
    eventType;
    state;
    constructor() {
        this.eventType = observer_interface_1.EventType.ERROR;
        this.state = observer_interface_1.ObserverStatus.PENDING;
    }
    update(data) {
        if (data?.eventType == this.eventType) {
            if (typeof data?.info === 'string') {
                console.error(`Error: ${data.info}`);
            }
            else {
                console.error('Error: Invalid data format');
            }
            this.state = observer_interface_1.ObserverStatus.ACTIVE;
            return;
        }
    }
}
exports.ConcreteObserverA = ConcreteObserverA;
//# sourceMappingURL=concrete-observerA.js.map