import { IStrategy } from './interfaces/strategy.interface';
import { TextMessageStrategy } from './strategies/text-message.strategy';
import { TemplateMessageStrategy } from './strategies/template-message.strategy';
export declare class StrategyContextService {
    private readonly textMessageStrategy;
    private readonly templateMessageStrategy;
    private strategies;
    constructor(textMessageStrategy: TextMessageStrategy, templateMessageStrategy: TemplateMessageStrategy);
    getStrategy(type: string): IStrategy;
    executeStrategy(type: string, data: any): Promise<any>;
}
