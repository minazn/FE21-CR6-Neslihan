import { TestBed } from '@angular/core/testing';

import { CaartService } from './caart.service';

describe('CaartService', () => {
  let service: CaartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
