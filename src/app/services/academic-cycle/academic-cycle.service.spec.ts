import { TestBed } from '@angular/core/testing';

import { AcademicCycleService } from './academic-cycle.service';

describe('AcademicCycleService', () => {
  let service: AcademicCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
