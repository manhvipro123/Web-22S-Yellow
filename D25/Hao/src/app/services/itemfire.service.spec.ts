import { TestBed } from '@angular/core/testing';

import { ItemfireService } from './itemfire.service';

describe('ItemfireService', () => {
  let service: ItemfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
