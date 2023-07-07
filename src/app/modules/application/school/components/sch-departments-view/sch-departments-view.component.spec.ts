import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDepartmentsViewComponent } from './sch-departments-view.component';

describe('SchDepartmentsViewComponent', () => {
  let component: SchDepartmentsViewComponent;
  let fixture: ComponentFixture<SchDepartmentsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchDepartmentsViewComponent]
    });
    fixture = TestBed.createComponent(SchDepartmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
