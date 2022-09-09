import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProviderService } from '../services/form-provider.service';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {
  form:FormGroup = new FormGroup({})
  
  constructor(private formProvider: FormProviderService, private router: Router) {}
  onSubmit():any {
    if(this.form.invalid){
      return false
    }

    this.router.navigate(['preview'])
    
  }

  ngOnInit(): void {
    this.form = this.formProvider.form
  }

}
