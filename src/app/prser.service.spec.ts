import { TestBed } from '@angular/core/testing';

import { PrserService } from './prser.service';

describe('PrserService', () => {
  let service: PrserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
