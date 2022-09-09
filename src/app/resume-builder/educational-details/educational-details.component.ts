import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  form:FormGroup = new FormGroup({})
  educationDetails:any;
  constructor(private formProvider: FormProviderService) { }

  addEducation():void{
    this.formProvider.addEducation();
  }
  
  ngOnInit(): void {
    this.form = this.formProvider.form
    this.educationDetails = this.form.controls['educationalDetails'] as FormArray;
  }

}
