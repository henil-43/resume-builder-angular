import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewResumeComponent } from './preview-resume/preview-resume.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';

const routes: Routes = [
  {
    path:'',
    component: ResumeBuilderComponent
  },
  {
    path:'preview',
    component: PreviewResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
