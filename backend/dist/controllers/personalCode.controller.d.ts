import { PersonalCodeService } from '../services/personalCode.service';
export declare class PersonalCodeController {
    private readonly personalCodeService;
    constructor(personalCodeService: PersonalCodeService);
    getGender(): string;
}
