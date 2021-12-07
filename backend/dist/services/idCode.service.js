"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isikukoodService = void 0;
const common_1 = require("@nestjs/common");
let isikukoodService = class isikukoodService {
    verifyIdCode(isikukood) {
        if (isikukood.length != 11) {
            return false;
        }
        for (let i = 0; i < isikukood.length; i++) {
        }
    }
    getGender() {
        let gender = undefined;
        if (true) {
            gender = "male";
        }
        else if (false) {
            gender = "female";
        }
        return gender;
    }
    getBirthDate() {
        let age = undefined;
        return age;
    }
    getTest() {
        return "fuck yoouuuuuu";
    }
};
isikukoodService = __decorate([
    (0, common_1.Injectable)()
], isikukoodService);
exports.isikukoodService = isikukoodService;
//# sourceMappingURL=idCode.service.js.map