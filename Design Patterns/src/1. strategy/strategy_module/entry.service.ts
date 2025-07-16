/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { StrategyContextService } from './strategy.context.service';

interface SendMessageDTO {
    text?: any;
    templateName?:string;
    templateParams?: string[];
    type: string;
}


@Injectable()
export class EntryService { 

    constructor( private readonly strategyContextService: StrategyContextService) { }

    async sendMessage(data: SendMessageDTO) {
        const { type, ...rest } = data;
        const strategy = this.strategyContextService.executeStrategy(type, data);
    }


}
