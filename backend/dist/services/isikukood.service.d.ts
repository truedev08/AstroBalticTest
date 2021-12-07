export declare class IsikukoodService {
    returnValues(isikukood: string): "Invalid Isikukood, please try again!" | {
        isValid: any;
        gender: any;
        birthDate: string;
    };
    verifyIsikukood(isikukood: string): boolean;
    getGender(isikukood: string): any;
    getBirthDate(isikukood: string): string;
}
