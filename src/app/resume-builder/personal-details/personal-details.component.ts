import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({})


  constructor(private formProvider: FormProviderService) { }

  ngOnInit(): void {
    this.form = this.formProvider.form
    console.log("first",this.form)
  }

}
