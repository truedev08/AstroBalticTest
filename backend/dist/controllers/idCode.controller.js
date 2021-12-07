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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.idCodeController = void 0;
const common_1 = require("@nestjs/common");
const idCode_service_1 = require("../services/idCode.service");
let idCodeController = class idCodeController {
    constructor(idCodeService) {
        this.idCodeService = idCodeService;
    }
    getGender() {
        return this.idCodeService.getGender();
    }
    getBirthDate() {
        return this.idCodeService.getBirthDate();
    }
};
__decorate([
    (0, common_1.Get)('gender'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], idCodeController.prototype, "getGender", null);
__decorate([
    (0, common_1.Get)('birthDate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], idCodeController.prototype, "getBirthDate", null);
idCodeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof idCode_service_1.idCodeService !== "undefined" && idCode_service_1.idCodeService) === "function" ? _a : Object])
], idCodeController);
exports.idCodeController = idCodeController;
//# sourceMappingURL=idCode.controller.js.map