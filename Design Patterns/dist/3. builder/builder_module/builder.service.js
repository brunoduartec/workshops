"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const http_request_builder_1 = require("./http-request.builder");
let BuilderService = class BuilderService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async send() {
        const request = new http_request_builder_1.HttpRequestBuilder()
            .setMethod('POST')
            .setUrl('https://jsonplaceholder.typicode.com/posts')
            .addHeader('Content-Type', 'application/json')
            .setBody({ title: 'foo', body: 'bar', userId: 1 })
            .build();
        const config = {
            headers: request.headers,
            params: request.queryParams,
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.request({
            method: request.method,
            url: request.url,
            data: request.body,
            ...config,
        }));
        return response.data;
    }
};
exports.BuilderService = BuilderService;
exports.BuilderService = BuilderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], BuilderService);
//# sourceMappingURL=builder.service.js.map