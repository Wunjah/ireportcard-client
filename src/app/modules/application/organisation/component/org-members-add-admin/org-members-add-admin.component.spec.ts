import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgMembersAddAdminComponent} from './org-members-add-admin.component';

describe('OrgMembersAddAdminComponent', () => {
  let component: OrgMembersAddAdminComponent;
  let fixture: ComponentFixture<OrgMembersAddAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgMembersAddAdminComponent]
    });
    fixture = TestBed.createComponent(OrgMembersAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
