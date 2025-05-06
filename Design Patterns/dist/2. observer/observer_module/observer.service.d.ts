import { ObserverData } from './observer.interface';
export declare class ObserverService {
    private subject;
    constructor();
    triggerEvent(event: ObserverData): void;
}
