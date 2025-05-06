/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ObserverService } from './observer.service';
import { EventType, ObserverData } from './observer.interface';

interface EventBody {
  info: string;
}

@Controller('observer')
export class ObserverController {
  constructor(private readonly observerService: ObserverService) {}

  @Post('eventA')
  handleEventA(@Body() data: EventBody) {
    // Handle event A

    const event: ObserverData = {
      eventType: EventType.ERROR,
      info: data.info,
    };
    this.observerService.triggerEvent(event);

    return { message: 'Event A handled successfully' };
  }

  @Post('eventB')
  handleEventB(@Body() data: EventBody) {
    // Handle event A

    const event: ObserverData = {
      eventType: EventType.INFO,
      info: data.info,
    };
    this.observerService.triggerEvent(event);

    return { message: 'Event B handled successfully' };
  }
}
