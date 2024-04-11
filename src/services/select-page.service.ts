import { Injectable } from '@angular/core';
import { Page, TreeNode } from '../types/page';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectPageService {

  // move to json file
  pages: Page[] =  [];

  openPagesSubject: BehaviorSubject<Page[]> = new BehaviorSubject<Page[]>([]);;
  //openPages$ = this.openPagesSubject.asObservable();

  private pageDataUrl = 'assets/pages.json';

  constructor(private http: HttpClient) { 
    this.http.get<any[]>(this.pageDataUrl).subscribe(data => {
      this.pages = data;
      this.openPagesSubject.next([this.pages[0]]);
    });
  }

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
