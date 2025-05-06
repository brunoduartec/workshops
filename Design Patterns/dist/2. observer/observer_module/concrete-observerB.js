"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserverB = void 0;
const observer_interface_1 = require("./observer.interface");
class ConcreteObserverB {
    eventType;
    state;
    constructor() {
        this.eventType = observer_interface_1.EventType.INFO;
        this.state = observer_interface_1.ObserverStatus.PENDING;
    }
    update(data) {
        if (data?.eventType !== this.eventType) {
            if (typeof data?.info === 'string') {
                console.log(`Error: ${JSON.parse(data.info)}`);
            }
            else {
                console.log('Error: Invalid data format');
            }
            this.state = observer_interface_1.ObserverStatus.ACTIVE;
            return;
        }
    }
}
exports.ConcreteObserverB = ConcreteObserverB;
//# sourceMappingURL=concrete-observerB.js.map