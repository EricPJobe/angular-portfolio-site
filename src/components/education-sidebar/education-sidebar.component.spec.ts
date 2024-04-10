import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSidebarComponent } from './education-sidebar.component';

describe('EducationSidebarComponent', () => {
  let component: EducationSidebarComponent;
  let fixture: ComponentFixture<EducationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
