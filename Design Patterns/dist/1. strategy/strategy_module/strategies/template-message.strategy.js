"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateMessageStrategy = void 0;
const common_1 = require("@nestjs/common");
let TemplateMessageStrategy = class TemplateMessageStrategy {
    execute(data) {
        console.log('Sending template message:', data);
        return { status: 'success', message: 'Template message sent successfully' };
    }
};
exports.TemplateMessageStrategy = TemplateMessageStrategy;
exports.TemplateMessageStrategy = TemplateMessageStrategy = __decorate([
    (0, common_1.Injectable)()
], TemplateMessageStrategy);
//# sourceMappingURL=template-message.strategy.js.map