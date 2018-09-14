import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OtherInsurace } from '../../Interface/other-insurance';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  insuranceForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createInsuranceForm();
  }

 createInsuranceForm() {
   this.insuranceForm =   this.formBuilder.group(new OtherInsurace(), {
       employeeName: new FormControl ('', Validators.required),
       memberId: new FormControl ('', Validators.required),
       claimNo: new FormControl (0, Validators.required),
       incurred: new FormControl (new Date(), Validators.required),
       accountNum: new FormControl (0, Validators.required),
       groupEmployer: new FormControl('', Validators.required),
       exsistingCoverage: new FormControl (false, Validators.required),
       signature: new FormControl ('', Validators.required), 
       signDate: new FormControl (new Date(), Validators.required)
     });
   };

   onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: OtherInsurace = Object.assign({}, this.insuranceForm.value);
    result.carrier = Object.assign({}, result.carrier);

    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    // Resets to blank object
    this.insuranceForm.reset();

    // Resets to provided model
    this.insuranceForm.reset({ OtherInsurace: new OtherInsurace(), requestType: '', text: '' });
  }
 }
