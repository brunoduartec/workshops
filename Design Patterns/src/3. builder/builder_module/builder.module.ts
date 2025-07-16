import { BuilderController } from './builder.controller';
import { BuilderService } from './builder.service';
import { HttpModule as AxiosModule } from '@nestjs/axios';


/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [AxiosModule],
  controllers: [
    BuilderController],
  providers: [BuilderService],
})
export class BuilderModule { }
