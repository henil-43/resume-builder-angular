import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormProviderService } from '../services/form-provider.service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

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
  @ViewChild('save') save: any;
  controlValue(control:string):any{
    return this.form.get(control)?.value;
  }

  controlArray(control:string):any{
    return this.form.get(control);
  }

  downloadPdf():any{
    window.print()
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

     /* html2canvas(this.save.nativeElement, {scale: 1.1}).then(canvas => {
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png', 1)  
      let pdf = new jsPDF('p', 'mm');   
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  

      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save('resume.pdf'); // Generated PDF   
    }) */