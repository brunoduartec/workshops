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
exports.StrategyController = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
let StrategyController = class StrategyController {
    entryService;
    constructor(entryService) {
        this.entryService = entryService;
    }
    async handleRequest() {
        await this.entryService.sendMessage({
            text: 'Hello, World!',
            templateName: 'greeting',
            templateParams: ['John'],
            type: 'template',
        });
        return { message: 'Request handled successfully' };
    }
};
exports.StrategyController = StrategyController;
__decorate([
    (0, common_1.Post)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StrategyController.prototype, "handleRequest", null);
exports.StrategyController = StrategyController = __decorate([
    (0, common_1.Controller)('strategy'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], StrategyController);
//# sourceMappingURL=strategy.controller.js.map