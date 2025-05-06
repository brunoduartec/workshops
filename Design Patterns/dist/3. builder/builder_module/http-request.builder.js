"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestBuilder = void 0;
class HttpRequestBuilder {
    method;
    url;
    headers = {};
    queryParams = {};
    body;
    setMethod(method) {
        this.method = method;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    addHeader(key, value) {
        this.headers[key] = value;
        return this;
    }
    addQueryParam(key, value) {
        this.queryParams[key] = value;
        return this;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    build() {
        if (!this.method || !this.url) {
            throw new Error('Method and URL are required');
        }
        return {
            method: this.method,
            url: this.url,
            headers: this.headers,
            queryParams: this.queryParams,
            body: this.body,
        };
    }
}
exports.HttpRequestBuilder = HttpRequestBuilder;
//# sourceMappingURL=http-request.builder.js.map