import { TestBed } from '@angular/core/testing';

import { LiginsignupService } from './liginsignup.service';

describe('LiginsignupService', () => {
  let service: LiginsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiginsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
