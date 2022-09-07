import { Injectable } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FormProviderService {
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { this.createForm(); }

  createForm():void{
    this.form = this.fb.group(
      {
        personalDetails: this.fb.group({
          firstName: [null, Validators.required],
          lastName: [null, Validators.required],
          fatherName: [null],
          motherName: [null],

        }),
        careerObjective: [null, Validators.required],
        contactDetails: this.fb.group({
          work: this.fb.array([this.fb.group({
            mobileNumber: [null, Validators.required],
            telephoneNumber: [null]
          })]),
          home: this.fb.array([this.fb.group({
            mobileNumber: [null, Validators.required],
            telephoneNumber: [null]
          })])
        }),

        educationalDetails: this.fb.array([this.fb.group({
          type: [null, Validators.required],
          marks: [null, Validators.required],
          total: [null],
          year: [null, Validators.required]
        })]),

        experience: this.fb.array([this.fb.group({
          company: [null, Validators.required],
          role: [null, Validators.required],
          responsibilities: [null],
          fromYear: [null, Validators.required],
          toYear: [null, Validators.required]
        })]),

        skills: [null, Validators.required]

      }
    )
  }

  addWorkContact():void{
    const newWorkContact = this.fb.group({
      mobileNumber: [null, Validators.required],
      telephoneNumber: [null]
    })

    const work = this.form.controls['contactDetails.work'] as FormArray;
    work.push(newWorkContact);
  }

  addHomeContact():void{
    const newHomeContact = this.fb.group({
      mobileNumber: [null, Validators.required],
      telephoneNumber: [null]
    })

    const work = this.form.controls['contactDetails.home'] as FormArray;
    work.push(newHomeContact);
  }
}
