import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewResumeComponent } from './preview-resume.component';

describe('PreviewResumeComponent', () => {
  let component: PreviewResumeComponent;
  let fixture: ComponentFixture<PreviewResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
