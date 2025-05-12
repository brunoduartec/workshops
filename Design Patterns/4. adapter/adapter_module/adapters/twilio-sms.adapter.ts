import { Injectable } from '@nestjs/common';
import { SmsService } from '../interfaces/sms.service.interface';
import { ExternalTwilioClient } from '../external/external-twilio-client';

@Injectable()
export class TwilioSmsAdapter implements SmsService {
  constructor(private readonly client: ExternalTwilioClient) {}

  async sendSms(to: string, message: string): Promise<void> {
    await this.client.send(to, message);
  }
}
