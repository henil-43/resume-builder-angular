import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  constructor(private formProvider: FormProviderService) { }

  add(){
    
  }
  ngOnInit(): void {
    this.form = this.formProvider.form 
  }

}
