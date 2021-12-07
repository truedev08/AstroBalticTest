import { IsikukoodService } from '../services/isikukood.service';
export declare class IsikukoodController {
    private readonly isikukoodService;
    constructor(isikukoodService: IsikukoodService);
    verifyIsikukood(isikuKood: string): string | {
        isValid: any;
        gender: any;
        birthDate: string;
    };
    getGender(isikuKood: string): any;
    getBirthDate(isikuKood: string): string;
}
