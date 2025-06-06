import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpRequest } from './http-request.model';
import { HttpRequestBuilder } from './http-request.builder';

@Injectable()
export class BuilderService {

  constructor(private readonly httpService: HttpService) {}

  async send(): Promise<any> {
    const request: HttpRequest = new HttpRequestBuilder()
      .setMethod('POST')
      .setUrl('https://jsonplaceholder.typicode.com/posts')
      .addHeader('Content-Type', 'application/json')
      .setBody({ title: 'foo', body: 'bar', userId: 1 })
      .build();

    const config = {
      headers: request.headers,
      params: request.queryParams,
    };

    const response = await firstValueFrom(
      this.httpService.request({
        method: request.method,
        url: request.url,
        data: request.body,
        ...config,
      }),
    );

    return response.data;
  }
}