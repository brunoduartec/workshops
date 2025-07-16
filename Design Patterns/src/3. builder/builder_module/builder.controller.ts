/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';
import { BuilderService } from './builder.service';

@Controller('builder')
export class BuilderController {
  constructor(
    private readonly builderService: BuilderService, // Inject the service here
  ) {}

  @Post('')
  send() {
    return this.builderService.send(); // Call the service method
  }
}
