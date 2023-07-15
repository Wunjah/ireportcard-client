import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgMembersAddStaffComponent} from './org-members-add-staff.component';

describe('OrgMembersAddStaffComponent', () => {
  let component: OrgMembersAddStaffComponent;
  let fixture: ComponentFixture<OrgMembersAddStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgMembersAddStaffComponent]
    });
    fixture = TestBed.createComponent(OrgMembersAddStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
