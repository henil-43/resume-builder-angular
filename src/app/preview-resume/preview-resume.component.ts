import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormProviderService } from '../services/form-provider.service';

@Component({
  selector: 'app-preview-resume',
  templateUrl: './preview-resume.component.html',
  styleUrls: ['./preview-resume.component.css']
})
export class PreviewResumeComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  personalDetails:any;
  contactDetails: any;
  educationalDetails: any;
  experience: any;
  skills: any;
  controlValue(control:string):any{
    return this.form.get(control)?.value;
  }

  controlArray(control:string):any{
    return this.form.get(control);
  }

  constructor(private formProvider:FormProviderService ) { }

  ngOnInit(): void {
    this.form = this.formProvider.form

    this.personalDetails = this.controlArray('personalDetails');
    this.contactDetails = this.controlArray('contactDetails')

    this.educationalDetails = this.controlArray('educationalDetails')
    this.experience = this.controlArray('experience')
    this.skills = this.controlValue('skills')?.split(',')

  }

}
