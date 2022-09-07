import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  form:FormGroup = new FormGroup({})
  constructor(private formProvider: FormProviderService) { }

  ngOnInit(): void {
    this.form = this.formProvider.form
  }

}
