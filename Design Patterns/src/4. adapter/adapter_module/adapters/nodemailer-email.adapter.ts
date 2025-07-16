import { Injectable } from '@nestjs/common';
import { EmailService } from '../interfaces/email.service.interface';
import { FakeEmailClient } from '../external/fake-email-client';

@Injectable()
export class NodemailerEmailAdapter implements EmailService {
  constructor(private readonly client: FakeEmailClient) {}

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.client.dispatch(to, subject, body);
  }
}
