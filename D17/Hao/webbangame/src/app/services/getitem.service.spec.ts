import { TestBed } from '@angular/core/testing';

import { GetitemService } from './getitem.service';

describe('GetitemService', () => {
  let service: GetitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
