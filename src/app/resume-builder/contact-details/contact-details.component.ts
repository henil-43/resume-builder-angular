import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  work: any
  home:any
  constructor(private formProvider: FormProviderService) { }
  
  add(domain:string): void{
    this.formProvider.addContact(domain);
  }

  delete(domain: string,index: number):void{
    this.formProvider.deleteContact(domain, index)
    console.log(this.form)

  }
  ngOnInit(): void {
    this.form = this.formProvider.form
    this.work = this.form.controls['contactDetails'].get('work') as FormArray
    this.home = this.form.controls['contactDetails'].get('home') as FormArray 
  }

}
