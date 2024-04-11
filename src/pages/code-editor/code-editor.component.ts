import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Page } from '../../types/page';
import { SelectPageService } from '../../services/select-page.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SidebarComponent],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit, AfterViewChecked {
  openPages: Page[] = [];
  codeContent: Array<any> = [];

  // get lines(): number[] {
  //   const lineCount = 100;
  //   return Array.from({ length: lineCount }, (_, i) => i + 1);
  // }

  constructor(private selectPageService: SelectPageService, private http: HttpClient, private highlightService: HighlightService) {
  }

  ngOnInit() {
    this.selectPageService.openPagesSubject.subscribe({
      next: (v) => {
        this.openPages = v;
        // console.log(this.openPages);
        this.highlightCode();
      },
    });
  }

  ngAfterViewChecked() {
    if(this.codeContent.length > 0) {
      this.highlightService.highlightAll();
    }
  }
  
  highlightCode() {
    this.openPages.forEach(page => {
      this.http.get('assets/' + page.codeUrl, { responseType: 'text' }).subscribe(data => {
        this.codeContent.push({ file: page.ident, code: data})
      });
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
