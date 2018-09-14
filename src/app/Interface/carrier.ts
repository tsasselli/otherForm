export class Carrier {
    carrierName: string = '';
    carrierId: number = 0;
    policyName: string = '';
    dob: Date = new Date();
    planType: string = '';
    effictiveDate: Date = new Date();
    terminationDate: Date = new Date();
    // todo: Seperate dependent into seperate class
    dependentName: string = '';
    relationshipToPolicyHolder: string = '';
    ifCoverageCourtOrder: boolean = false; 

}