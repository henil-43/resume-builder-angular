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
            telephoneNumber: [null, Validators.required]
          })]),
          home: this.fb.array([this.fb.group({
            mobileNumber: [null, Validators.required],
            telephoneNumber: [null, Validators.required]
          })])
        }),

        educationalDetails: this.fb.array([this.fb.group({
          type: [null, Validators.required],
          marks: [null, Validators.required],
          total: [null, Validators.required],
          year: [null, Validators.required]
        })]),

        experience: this.fb.array([this.fb.group({
          company: [null, Validators.required],
          role: [null, Validators.required],
          responsibilities: [null, Validators.required],
          fromYear: [null, Validators.required],
          toYear: [null, Validators.required]
        })]),

        skills: [null, Validators.required]

      }
    )
  }

  addContact(domain: string):void{
    const newContact = this.fb.group({
      mobileNumber: [null, Validators.required],
      telephoneNumber: [null, Validators.required]
    })

    const work = this.form.controls['contactDetails'].get(domain) as FormArray
    work.push(newContact);
  }

  addEducation():void{
    const newEducation = this.fb.group({
      type: [null, Validators.required],
      marks: [null, Validators.required],
      total: [null, Validators.required],
      year: [null, Validators.required]
    })

    const education = this.form.controls['educationalDetails'] as FormArray
    education.push(newEducation);
  }

  addExperience():void{
    const exp = this.fb.group({
      company: [null, Validators.required],
      role: [null, Validators.required],
      responsibilities: [null, Validators.required],
      fromYear: [null, Validators.required],
      toYear: [null, Validators.required]
    })

    const experience = this.form.controls['experience'] as FormArray
    experience.push(exp)
  }
}
