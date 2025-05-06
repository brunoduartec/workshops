import { Observer, ObserverData } from './observer.interface';
import { Subject } from './subject.interface';
export declare class ConcreteSubject implements Subject {
    private observers;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(data: ObserverData): void;
}
