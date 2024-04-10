import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Page } from '../../types/page';
import { SelectPageService } from '../../services/select-page.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SidebarComponent],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit {
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
