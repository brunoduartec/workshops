import { ObserverController } from './observer.controller';
import { ObserverService } from './observer.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ObserverController],
  providers: [ObserverService],
})
export class ObserverModule {}
