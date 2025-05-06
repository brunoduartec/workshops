import { Observer, EventType, ObserverData, ObserverStatus } from './observer.interface';
export declare class ConcreteObserverA implements Observer {
    eventType: EventType;
    state: ObserverStatus;
    constructor();
    update(data: ObserverData): void;
}
