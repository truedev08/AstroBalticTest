import { idCodeService } from '../services/idCode.service';
export declare class idCodeController {
    private readonly idCodeService;
    constructor(idCodeService: idCodeService);
    getGender(): string;
    getBirthDate(): string;
}
