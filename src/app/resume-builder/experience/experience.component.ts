import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  form: FormGroup = new FormGroup({}) 
  experience: any;
  constructor(private formProvider: FormProviderService) { }

  addExperience():void{
    this.formProvider.addExperience()
  }

  deleteExperience(index: number):void{
    this.formProvider.deleteExperience(index);
  }

  ngOnInit(): void {
    this.form = this.formProvider.form;
    this.experience = this.form.controls['experience'] as FormArray
  }

}
