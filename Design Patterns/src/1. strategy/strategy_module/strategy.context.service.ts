/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { IStrategy } from './interfaces/strategy.interface';
import { TextMessageStrategy } from './strategies/text-message.strategy';
import { TemplateMessageStrategy } from './strategies/template-message.strategy';

@Injectable()
export class StrategyContextService {
  private strategies: Map<string, IStrategy> = new Map<string, IStrategy>();

  constructor(
    private readonly textMessageStrategy: TextMessageStrategy,
    private readonly templateMessageStrategy: TemplateMessageStrategy,
  ) {
    this.strategies.set('text', this.textMessageStrategy);
    this.strategies.set('template', this.templateMessageStrategy);
  }

  getStrategy(type: string): IStrategy {
    const strategy = this.strategies.get(type);
    if (!strategy) {
      throw new Error(`Strategy not found for type: ${type}`);
    }
    return strategy;
  }

  async executeStrategy(type: string, data: any): Promise<any> {
    const strategy = this.getStrategy(type);
    return await strategy.execute(data);
  }
}
