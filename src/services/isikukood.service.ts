import { Injectable } from '@nestjs/common'

@Injectable()
export class IsikukoodService {
  returnValues(isikukood: string) {
    let isValid = undefined;
    if (this.verifyIsikukood(isikukood) != true) {
      isValid = false;
      return "Invalid Isikukood, please try again!"
    } else {
      isValid = true;
    }

    let isikukoodData = {
      isValid, 
      gender: this.getGender(isikukood), 
      birthDate: this.getBirthDate(isikukood)
    }
    return isikukoodData
  }

  verifyIsikukood(isikukood: string) {
    let weightOne = [1,2,3,4,5,6,7,8,9,1]
    let weightTwo = [3,4,5,6,7,8,9,1,2,3]

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
      sum += Number(isikukoodArray[i])
    }

    let checksum = sum % 11;
    if (checksum > 9) {
      console.log("checksum greater than 10, re calculating...");
      for (let i = 0; i < 10; i++) {
        isikukoodArray[i] = (Number(isikukoodArray[i]) * weightTwo[i]).toString();
      }

      let sum = 0;
      for (let i = 0; i < 10; i++) {
      sum += Number(isikukoodArray[i])
      }

      checksum = sum % 11
      
      if (checksum > 9) {
        checksum = 0
      }
    }

    if (checksum === Number(isikukoodArray[10])) {
      console.log("Isikukood is Valid!");
      return true;
    } else {
      console.log("Invalid Isikukood!");
      return false;
    }
  }

  getGender(isikukood: string) {
    let gender = undefined;

    switch (Number(isikukood[0])%2) {
      case 0:
        gender = "female";
        break;
      case 1:
        gender = "male";
        break;
      default:
        gender = "Invalid. Undefined."
    }
    return gender
  }

  getBirthDate(isikukood: string) {
    let birthYear = isikukood.slice(1, 3)
    let birthMonth = isikukood.slice(3, 5)
    let birthDay = isikukood.slice(5, 7)
    let birthDate = (birthDay + "/" + birthMonth + "/" + birthYear);
    
    return birthDate 
  }
}