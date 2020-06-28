import { TestBed } from '@angular/core/testing';

import { ArbitresService } from './arbitres.service';

describe('ArbitresService', () => {
  let service: ArbitresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbitresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
