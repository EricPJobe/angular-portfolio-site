import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MainComponent } from '../pages/main/main.component';
import { Page } from '../types/page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'protfolio';
  pageSelected = '';
  openPages: Page[] = [];

  pages: Page[] = [
    {
      ident: 'poetic',
      name: 'Poetic Digital',
      text: 'I coded stuff',
      graphicUrl: 'url_for_poetic',
    },
    {
      ident: 'apache',
      name: 'Apache Corp',
      text: 'I coded stuff',
      graphicUrl: 'url_for_apache',
    },
    {
      ident: 'chicago',
      name: 'University of Chicago',
      text: 'I studied stuff',
      graphicUrl: 'url_for_uc',
    },
  ];
  setPageSelect(event: string) {
    console.log(event);
    this.openPages.push(this.pages.filter(p => p.ident === event)[0]); // TODO select proper page with filter
    this.pageSelected = event;
    console.log(this.openPages);
  }

  closePage(event: string) {
    let p: Page = this.pages.filter(page => page.ident === event)[0];
    this.openPages.splice(this.openPages.indexOf(p), 1);
    console.log(this.openPages);
  }
}
