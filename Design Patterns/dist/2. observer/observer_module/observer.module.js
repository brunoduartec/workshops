"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverModule = void 0;
const observer_controller_1 = require("./observer.controller");
const observer_service_1 = require("./observer.service");
const common_1 = require("@nestjs/common");
let ObserverModule = class ObserverModule {
};
exports.ObserverModule = ObserverModule;
exports.ObserverModule = ObserverModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [observer_controller_1.ObserverController],
        providers: [observer_service_1.ObserverService],
    })
], ObserverModule);
//# sourceMappingURL=observer.module.js.map