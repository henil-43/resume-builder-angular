import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume-builder/personal-details/personal-details.component';
import { ContactDetailsComponent } from './resume-builder/contact-details/contact-details.component';
import { EducationalDetailsComponent } from './resume-builder/educational-details/educational-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './resume-builder/experience/experience.component';
import { FormComponentComponent } from './resume-builder/contact-details/components/form-component/form-component.component';
import { PreviewResumeComponent } from './preview-resume/preview-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    EducationalDetailsComponent,
    ExperienceComponent,
    FormComponentComponent,
    PreviewResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
