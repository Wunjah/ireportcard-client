import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeacherAddComponent } from './form-teacher-add.component';

describe('FormAddTeacherComponent', () => {
  let component: FormTeacherAddComponent;
  let fixture: ComponentFixture<FormTeacherAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTeacherAddComponent]
    });
    fixture = TestBed.createComponent(FormTeacherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
