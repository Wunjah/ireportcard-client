import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchDepartmentsAddComponent} from './sch-departments-add.component';

describe('SchDepartmentsAddComponent', () => {
  let component: SchDepartmentsAddComponent;
  let fixture: ComponentFixture<SchDepartmentsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchDepartmentsAddComponent]
    });
    fixture = TestBed.createComponent(SchDepartmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
