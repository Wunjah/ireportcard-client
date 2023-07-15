import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgSchoolsComponent} from './org-schools.component';

describe('OrgSchoolsComponent', () => {
  let component: OrgSchoolsComponent;
  let fixture: ComponentFixture<OrgSchoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSchoolsComponent]
    });
    fixture = TestBed.createComponent(OrgSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
