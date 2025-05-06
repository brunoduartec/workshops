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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverController = void 0;
const common_1 = require("@nestjs/common");
const observer_service_1 = require("./observer.service");
const observer_interface_1 = require("./observer.interface");
let ObserverController = class ObserverController {
    observerService;
    constructor(observerService) {
        this.observerService = observerService;
    }
    handleEventA(data) {
        const event = {
            eventType: observer_interface_1.EventType.ERROR,
            info: data.info,
        };
        this.observerService.triggerEvent(event);
        return { message: 'Event A handled successfully' };
    }
    handleEventB(data) {
        const event = {
            eventType: observer_interface_1.EventType.INFO,
            info: data.info,
        };
        this.observerService.triggerEvent(event);
        return { message: 'Event B handled successfully' };
    }
};
exports.ObserverController = ObserverController;
__decorate([
    (0, common_1.Post)('eventA'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ObserverController.prototype, "handleEventA", null);
__decorate([
    (0, common_1.Post)('eventB'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ObserverController.prototype, "handleEventB", null);
exports.ObserverController = ObserverController = __decorate([
    (0, common_1.Controller)('observer'),
    __metadata("design:paramtypes", [observer_service_1.ObserverService])
], ObserverController);
//# sourceMappingURL=observer.controller.js.map