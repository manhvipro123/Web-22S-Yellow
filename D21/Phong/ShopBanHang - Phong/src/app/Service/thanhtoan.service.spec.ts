import { TestBed } from '@angular/core/testing';

import { ThanhtoanService } from './thanhtoan.service';

describe('ThanhtoanService', () => {
  let service: ThanhtoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThanhtoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
