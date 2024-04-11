import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { PlatformLocation, isPlatformBrowser } from '@angular/common';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-haskell';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
