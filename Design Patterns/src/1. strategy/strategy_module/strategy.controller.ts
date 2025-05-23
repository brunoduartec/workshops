/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { EntryService } from './entry.service';

@Controller('strategy')
export class StrategyController {
  constructor(private readonly entryService: EntryService) {}

  @Post('')
  async handleRequest() {
    await this.entryService.sendMessage({
      text: 'Hello, World!',
      templateName: 'greeting',
      templateParams: ['John'],
      type: 'template',
    });
    return { message: 'Request handled successfully' };
  }
}
