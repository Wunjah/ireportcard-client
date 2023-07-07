import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDepartmentsComponent } from './sch-departments.component';

describe('SchDepartmentsComponent', () => {
  let component: SchDepartmentsComponent;
  let fixture: ComponentFixture<SchDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchDepartmentsComponent]
    });
    fixture = TestBed.createComponent(SchDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
