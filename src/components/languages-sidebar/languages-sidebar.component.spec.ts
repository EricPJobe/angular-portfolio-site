import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSidebarComponent } from './languages-sidebar.component';

describe('LanguagesSidebarComponent', () => {
  let component: LanguagesSidebarComponent;
  let fixture: ComponentFixture<LanguagesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
