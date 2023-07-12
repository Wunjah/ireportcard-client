import {TestBed} from '@angular/core/testing';

import {SchoolStaffService} from './school-staff.service';

describe('SchoolStaffService', () => {
  let service: SchoolStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
