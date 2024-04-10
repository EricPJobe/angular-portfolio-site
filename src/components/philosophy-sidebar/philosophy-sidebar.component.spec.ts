import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophySidebarComponent } from './philosophy-sidebar.component';

describe('PhilosophySidebarComponent', () => {
  let component: PhilosophySidebarComponent;
  let fixture: ComponentFixture<PhilosophySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilosophySidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhilosophySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
