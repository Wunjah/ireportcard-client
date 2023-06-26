import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSchoolsAssignStaffComponent } from './org-schools-assign-staff.component';

describe('OrgSchoolsAssignAdminComponent', () => {
  let component: OrgSchoolsAssignStaffComponent;
  let fixture: ComponentFixture<OrgSchoolsAssignStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSchoolsAssignStaffComponent]
    });
    fixture = TestBed.createComponent(OrgSchoolsAssignStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
