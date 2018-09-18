import { OtherInsuranceFormModule } from './other-insurance-form.module';

describe('InsuranceFormModule', () => {
  let insuranceFormModule: OtherInsuranceFormModule;

  beforeEach(() => {
    insuranceFormModule = new OtherInsuranceFormModule();
  });

  it('should create an instance', () => {
    expect(insuranceFormModule).toBeTruthy();
  });
});
