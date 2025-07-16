import { Injectable } from '@nestjs/common';
import { IStrategy } from '../interfaces/strategy.interface';


@Injectable()
export class TemplateMessageStrategy implements IStrategy {
    execute(data: any): any {
        // Implement the logic for sending a text message
        console.log('Sending template message:', data);
        return { status: 'success', message: 'Template message sent successfully' };
    }
}
