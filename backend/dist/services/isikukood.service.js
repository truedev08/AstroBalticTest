"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsikukoodService = void 0;
const common_1 = require("@nestjs/common");
let IsikukoodService = class IsikukoodService {
    returnValues(isikukood) {
        let isValid = undefined;
        if (this.verifyIsikukood(isikukood) != true) {
            isValid = false;
            return "Invalid Isikukood, please try again!";
        }
        else {
            isValid = true;
        }
        let isikukoodData = {
            isValid,
            gender: this.getGender(isikukood),
            birthDate: this.getBirthDate(isikukood)
        };
        return isikukoodData;
    }
    verifyIsikukood(isikukood) {
        let weightOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
        let weightTwo = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
        if (isikukood.length != 11) {
            console.log("Isikukood should be 11 digits long! Please re-enter a valid Isikukood.");
            return false;
        }
        let isikukoodArray = Array.from(isikukood);
        for (let i = 0; i < 10; i++) {
            isikukoodArray[i] = (Number(isikukoodArray[i]) * weightOne[i]).toString();
        }
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += Number(isikukoodArray[i]);
        }
        let checksum = sum % 11;
        if (checksum > 9) {
            console.log("checksum greater than 10, re calculating...");
            for (let i = 0; i < 10; i++) {
                isikukoodArray[i] = (Number(isikukoodArray[i]) * weightTwo[i]).toString();
            }
            let sum = 0;
            for (let i = 0; i < 10; i++) {
                sum += Number(isikukoodArray[i]);
            }
            checksum = sum % 11;
            if (checksum > 9) {
                checksum = 0;
            }
        }
        if (checksum === Number(isikukoodArray[10])) {
            console.log("Isikukood is Valid!");
            return true;
        }
        else {
            console.log("Invalid Isikukood!");
            return false;
        }
    }
    getGender(isikukood) {
        let gender = undefined;
        switch (Number(isikukood[0]) % 2) {
            case 0:
                gender = "female";
                break;
            case 1:
                gender = "male";
                break;
            default:
                gender = "Invalid. Undefined.";
        }
        return gender;
    }
    getBirthDate(isikukood) {
        let century = undefined;
        let birthYear = isikukood.slice(1, 3);
        let birthMonth = isikukood.slice(3, 5);
        let birthDay = isikukood.slice(5, 7);
        switch (Number(isikukood[0])) {
            case 0:
                return "Invalid Century";
            case 1:
            case 2:
                century = 19;
                break;
            case 3:
            case 4:
                century = 20;
                break;
            case 5:
            case 6:
                century = 21;
                break;
            case 7:
            case 8:
            case 9:
                break;
        }
        let birthDate = (birthDay + "/" + birthMonth + "/" + ((century - 1)).toString().concat(birthYear));
        return birthDate;
    }
};
IsikukoodService = __decorate([
    (0, common_1.Injectable)()
], IsikukoodService);
exports.IsikukoodService = IsikukoodService;
//# sourceMappingURL=isikukood.service.js.map