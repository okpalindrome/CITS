import { TestBed } from '@angular/core/testing';

import { ScaseService } from './scase.service';

describe('ScaseService', () => {
  let service: ScaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
