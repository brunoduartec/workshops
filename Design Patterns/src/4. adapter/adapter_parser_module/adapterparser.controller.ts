/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Param } from '@nestjs/common';
import { ParserService } from './parser.service';

@Controller('parser')
export class AdapterParserController {
  constructor(private readonly parserService: ParserService) {}

  @Post(':providerName')
  parseData(@Param() params: { providerName: string }, @Body() body: any): any {
    const adapterName = params.providerName;

    if (!adapterName) {
      throw new Error('Provider name is required');
    }

    const parse = this.parserService.parseData(adapterName, body);
    return parse;
  }
}
