import { ObserverService } from './observer.service';
interface EventBody {
    info: string;
}
export declare class ObserverController {
    private readonly observerService;
    constructor(observerService: ObserverService);
    handleEventA(data: EventBody): {
        message: string;
    };
    handleEventB(data: EventBody): {
        message: string;
    };
}
export {};
