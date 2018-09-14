import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
], 
exports: [ReactiveFormsModule, FlexLayoutModule]
})
export class OtherInsuranceFormModule { 
}
export const otherInsuranceFormComponents = [QuestionnaireComponent]

