import { Injectable } from '@angular/core';
import { Page, TreeNode } from '../types/page';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectPageService {

  // move to json file
  pages: Page[] =  [
    {
      ident: 'intro',
      name: 'introduction.js',
      body: `Hi! Welcome to my portfolio site! My name is Eric Jobe, and I am a software developer, educator, and community leader.`,
      text: 'Hello...',
      graphicUrl: 'url_for_intro',
      isActive: true,
    },
    {
      ident: 'poetic',
      name: 'poetic.tsx',
      body: '',
      text: 'I coded stuff',
      graphicUrl: 'url_for_poetic',
      isActive: false,
    },
    {
      ident: 'apache',
      name: 'Apache Corp',
      body: '',
      text: 'I coded stuff',
      graphicUrl: 'url_for_apache',
      isActive: false,
    },
    {
      ident: 'privily',
      name: 'Privily.io',
      body: '',
      text: 'I coded stuff',
      graphicUrl: 'url_for_privily',
      isActive: false,
    },
  ]

  openPagesSubject: BehaviorSubject<Page[]> = new BehaviorSubject<Page[]>([this.pages[0]]);
  //openPages$ = this.openPagesSubject.asObservable();

  constructor() { }

  addPage(node: TreeNode) {
    const currentPages = this.openPagesSubject.getValue();
    const page = this.pages.filter(p => p.ident === node.ident)[0];
    if (!currentPages.includes(page)) {
      page.isActive = true;
      const updatedPages = [...currentPages, page];
      updatedPages.forEach(p => {
        if (p !== page) {
          p.isActive = false;
        }
      });
      this.openPagesSubject.next(updatedPages);
    } else {
      page.isActive = true;
      currentPages.forEach(p => {
        if (p !== page) {
          p.isActive = false;
        }
      });
      this.openPagesSubject.next(currentPages);
    }
  }

  removePage(page: Page) {
    const currentPages = this.openPagesSubject.getValue();
    const updatedPages = currentPages.filter(p => p.ident !== page.ident);
    if (page.isActive) {
      let closeIndex = 0; 
      let newActivePageIndex = 0;
      currentPages.forEach((p, i) => {
        if (page.ident === p.ident) {
          closeIndex = i;
        }
      });
      if (closeIndex > 1) {
        newActivePageIndex = closeIndex - 1;
      }
      updatedPages[newActivePageIndex].isActive = true;
    }
    this.openPagesSubject.next(updatedPages);
  }

  
}
