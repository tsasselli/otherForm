import { InsuranceFormModule } from './other-insurance-form.module';

describe('InsuranceFormModule', () => {
  let insuranceFormModule: InsuranceFormModule;

  beforeEach(() => {
    insuranceFormModule = new InsuranceFormModule();
  });

  it('should create an instance', () => {
    expect(insuranceFormModule).toBeTruthy();
  });
});
