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
exports.IsikukoodController = void 0;
const common_1 = require("@nestjs/common");
const isikukood_service_1 = require("../services/isikukood.service");
let IsikukoodController = class IsikukoodController {
    constructor(isikukoodService) {
        this.isikukoodService = isikukoodService;
    }
    verifyIsikukood(isikuKood) {
        let isikukoodData = this.isikukoodService.returnValues(isikuKood);
        return isikukoodData;
    }
    getGender(isikuKood) {
        let gender = this.isikukoodService.getGender(isikuKood);
        return gender;
    }
    getBirthDate(isikuKood) {
        let birthDate = this.isikukoodService.getBirthDate(isikuKood);
        return birthDate;
    }
};
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)('isikukood')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IsikukoodController.prototype, "verifyIsikukood", null);
__decorate([
    (0, common_1.Post)('gender'),
    __param(0, (0, common_1.Body)('isikukood')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IsikukoodController.prototype, "getGender", null);
__decorate([
    (0, common_1.Post)('birthDate'),
    __param(0, (0, common_1.Body)('isikukood')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IsikukoodController.prototype, "getBirthDate", null);
IsikukoodController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [isikukood_service_1.IsikukoodService])
], IsikukoodController);
exports.IsikukoodController = IsikukoodController;
//# sourceMappingURL=isikukood.controller.js.map