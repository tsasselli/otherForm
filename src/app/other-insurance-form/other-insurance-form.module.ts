import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CarrierFormComponent } from './components/carrier-form/carrier-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
 
exports: [ReactiveFormsModule, FlexLayoutModule]
})
export class OtherInsuranceFormModule { 
}
export const otherInsuranceFormComponents = [QuestionnaireComponent, CarrierFormComponent]

