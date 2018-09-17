import { Carrier } from "./carrier";

export class OtherInsurace {
    employeeName: string = '';
    memberId: string = '';
    claimNo?: number = 0;
    incurred?: Date = new Date();
    accountNum?: number = 0;
    groupEmployer?: string = '';
    exsistingCoverage: boolean = false;
    signature: string = ''; 
    signDate: Date;
    carrier: Carrier;
}