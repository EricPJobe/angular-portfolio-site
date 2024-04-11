import { TestBed } from '@angular/core/testing';

import { SyntaxHighlightService } from './syntax-highlight.service';

describe('SyntaxHighlightService', () => {
  let service: SyntaxHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyntaxHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
