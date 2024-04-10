import { TestBed } from '@angular/core/testing';

import { SelectPageService } from './select-page.service';

describe('SelectPageService', () => {
  let service: SelectPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
