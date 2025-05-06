import { StrategyContextService } from './strategy.context.service';
interface SendMessageDTO {
    text?: any;
    templateName?: string;
    templateParams?: string[];
    type: string;
}
export declare class EntryService {
    private readonly strategyContextService;
    constructor(strategyContextService: StrategyContextService);
    sendMessage(data: SendMessageDTO): Promise<void>;
}
export {};
