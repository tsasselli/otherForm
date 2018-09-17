import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ClaimFormComponent } from './components/claim-form/claim-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
ClaimFormComponent], 
exports: [ReactiveFormsModule, FlexLayoutModule]
})
export class OtherInsuranceFormModule { 
}
export const otherInsuranceFormComponents = [QuestionnaireComponent]

