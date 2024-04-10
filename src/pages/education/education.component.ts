import { Component, OnInit } from '@angular/core';
import { EducationSidebarComponent } from '../../components/education-sidebar/education-sidebar.component';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { SelectPageService } from '../../services/select-page.service';
import { Page } from '../../types/page';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, EducationSidebarComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  openPages: Page[] = [];

  get lines(): number[] {
    const lineCount = 100;
    return Array.from({ length: lineCount }, (_, i) => i + 1);
  }

  constructor(private selectPageService: SelectPageService) {}

  ngOnInit() {
    this.selectPageService.openPagesSubject.subscribe({
      next: (v) => {
        this.openPages = v;
        console.log(this.openPages);
      },
    });
  }

  setActive(page: Page) {
    page.isActive = true;
    this.openPages.forEach(p => {
      if (p !== page) {
        p.isActive = false;
      }
    });
  } 

  closePage(page: Page) {
    this.selectPageService.removePage(page);
  }
}
