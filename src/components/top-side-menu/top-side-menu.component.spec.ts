import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSideMenuComponent } from './top-side-menu.component';

describe('TopSideMenuComponent', () => {
  let component: TopSideMenuComponent;
  let fixture: ComponentFixture<TopSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
