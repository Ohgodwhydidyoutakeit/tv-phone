import { TestBed } from '@angular/core/testing';

import { HammerServiceService } from './hammer-service.service';

describe('HammerServiceService', () => {
  let service: HammerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HammerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
