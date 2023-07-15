import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OrgSchoolsViewComponent} from './org-schools-view.component';

describe('OrgSchoolsViewComponent', () => {
  let component: OrgSchoolsViewComponent;
  let fixture: ComponentFixture<OrgSchoolsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSchoolsViewComponent]
    });
    fixture = TestBed.createComponent(OrgSchoolsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
