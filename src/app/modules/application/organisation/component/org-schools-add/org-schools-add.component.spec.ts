import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgSchoolsAddComponent} from './org-schools-add.component';

describe('OrgSchoolsAddComponent', () => {
  let component: OrgSchoolsAddComponent;
  let fixture: ComponentFixture<OrgSchoolsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSchoolsAddComponent]
    });
    fixture = TestBed.createComponent(OrgSchoolsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
