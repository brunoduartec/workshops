"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyModule = void 0;
const strategy_controller_1 = require("./strategy.controller");
const entry_service_1 = require("./entry.service");
const template_message_strategy_1 = require("./strategies/template-message.strategy");
const text_message_strategy_1 = require("./strategies/text-message.strategy");
const strategy_context_service_1 = require("./strategy.context.service");
const common_1 = require("@nestjs/common");
let StrategyModule = class StrategyModule {
};
exports.StrategyModule = StrategyModule;
exports.StrategyModule = StrategyModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [strategy_controller_1.StrategyController],
        providers: [
            entry_service_1.EntryService,
            strategy_context_service_1.StrategyContextService,
            text_message_strategy_1.TextMessageStrategy,
            template_message_strategy_1.TemplateMessageStrategy,
        ],
    })
], StrategyModule);
//# sourceMappingURL=strategy.module.js.map