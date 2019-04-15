import {TestBed} from '@angular/core/testing';

import {UnassignedService} from './unassigned.service';

describe('UnassignedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnassignedService = TestBed.get(UnassignedService);
    expect(service).toBeTruthy();
  });
});
