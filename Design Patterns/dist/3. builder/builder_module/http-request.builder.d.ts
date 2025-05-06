import { HttpRequest } from './http-request.model';
export declare class HttpRequestBuilder {
    private method;
    private url;
    private headers;
    private queryParams;
    private body;
    setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): this;
    setUrl(url: string): this;
    addHeader(key: string, value: string): this;
    addQueryParam(key: string, value: string): this;
    setBody(body: unknown): this;
    build(): HttpRequest;
}
