import { ClaimFormComponent } from './other-insurance-form/components/claim-form/claim-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OtherInsuranceFormModule, otherInsuranceFormComponents } from './other-insurance-form/other-insurance-form.module';

@NgModule({
  declarations: [
    AppComponent,
    otherInsuranceFormComponents,
  ],
  imports: [
    BrowserModule,
    OtherInsuranceFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
