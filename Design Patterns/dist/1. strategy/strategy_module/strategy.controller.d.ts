import { EntryService } from './entry.service';
export declare class StrategyController {
    private readonly entryService;
    constructor(entryService: EntryService);
    handleRequest(): Promise<{
        message: string;
    }>;
}
