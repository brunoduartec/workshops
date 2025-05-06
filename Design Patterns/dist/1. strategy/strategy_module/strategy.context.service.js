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
exports.StrategyContextService = void 0;
const common_1 = require("@nestjs/common");
const text_message_strategy_1 = require("./strategies/text-message.strategy");
const template_message_strategy_1 = require("./strategies/template-message.strategy");
let StrategyContextService = class StrategyContextService {
    textMessageStrategy;
    templateMessageStrategy;
    strategies = new Map();
    constructor(textMessageStrategy, templateMessageStrategy) {
        this.textMessageStrategy = textMessageStrategy;
        this.templateMessageStrategy = templateMessageStrategy;
        this.strategies.set('text', this.textMessageStrategy);
        this.strategies.set('template', this.templateMessageStrategy);
    }
    getStrategy(type) {
        const strategy = this.strategies.get(type);
        if (!strategy) {
            throw new Error(`Strategy not found for type: ${type}`);
        }
        return strategy;
    }
    async executeStrategy(type, data) {
        const strategy = this.getStrategy(type);
        return await strategy.execute(data);
    }
};
exports.StrategyContextService = StrategyContextService;
exports.StrategyContextService = StrategyContextService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [text_message_strategy_1.TextMessageStrategy,
        template_message_strategy_1.TemplateMessageStrategy])
], StrategyContextService);
//# sourceMappingURL=strategy.context.service.js.map