import { Controller, Body, Post, Get } from '@nestjs/common';
import { IsikukoodService } from '../services/isikukood.service';

@Controller()
export class IsikukoodController {
  constructor(private readonly isikukoodService: IsikukoodService) {}

  @Post('verify')
  verifyIsikukood(@Body('isikukood') isikuKood: string) {
    let isikukoodData = this.isikukoodService.returnValues(isikuKood);
    return isikukoodData
  }

  @Post('gender')
  getGender(@Body('isikukood') isikuKood: string) {
    let gender = this.isikukoodService.getGender(isikuKood);
    return gender;
  }

  @Post('birthDate')
  getBirthDate(@Body('isikukood') isikuKood: string) {
    let birthDate = this.isikukoodService.getBirthDate(isikuKood);
    return birthDate;
  }
}
