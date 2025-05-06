"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
class ConcreteSubject {
    observers = [];
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log('Observer has been attached already.');
            return;
        }
        console.log('Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('Nonexistent observer.');
            return;
        }
        this.observers.splice(observerIndex, 1);
        console.log('Detached an observer.');
    }
    notify(data) {
        console.log('Notifying observers...');
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}
exports.ConcreteSubject = ConcreteSubject;
//# sourceMappingURL=subject.js.map