export declare class PersonalCodeService {
    private readonly personalCode;
    constructor(personalCode: number);
    verifyPersonalCode(personalCode: number): boolean;
    getGender(): string;
    getAge(personalCode: number): number;
}
