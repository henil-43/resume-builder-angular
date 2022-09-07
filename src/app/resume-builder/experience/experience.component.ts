import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from 'src/app/services/form-provider.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  form: FormGroup = new FormGroup({}) 
  constructor(private formProvider: FormProviderService) { }

  ngOnInit(): void {
    this.form = this.formProvider.form;
  }

}
