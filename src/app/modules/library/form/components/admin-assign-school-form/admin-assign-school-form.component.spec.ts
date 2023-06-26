import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignSchoolFormComponent } from './admin-assign-school-form.component';

describe('AdminAssignSchoolFormComponent', () => {
  let component: AdminAssignSchoolFormComponent;
  let fixture: ComponentFixture<AdminAssignSchoolFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAssignSchoolFormComponent]
    });
    fixture = TestBed.createComponent(AdminAssignSchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
