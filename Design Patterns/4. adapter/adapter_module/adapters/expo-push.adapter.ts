import { Injectable } from '@nestjs/common';
import { PushService } from '../interfaces/push.service.interface';
import { FakePushClient } from '../external/fake-push-client';

@Injectable()
export class ExpoPushAdapter implements PushService {
  constructor(private readonly client: FakePushClient) {}

  async sendPush(to: string, message: string): Promise<void> {
    await this.client.push(to, message);
  }
}
