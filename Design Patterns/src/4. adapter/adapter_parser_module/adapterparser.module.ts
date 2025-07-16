/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AdapterParserController } from './adapterparser.controller';
import { ProviderAAdapterService } from './adapters/provideraadapter.service';
import { ProviderBAdapterService } from './adapters/providerbadapter.service';
import { AdapterFactoryService } from './adapterfactory.service';
import { ParserService } from './parser.service';

@Module({
  imports: [],
  controllers: [AdapterParserController],
  providers: [
    ProviderAAdapterService,
    ProviderBAdapterService,
    AdapterFactoryService,
    ParserService,
  ],
  exports: []
})
export class AdapterParserModule {}
