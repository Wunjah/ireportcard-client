import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchTeachersAddComponent } from './sch-teachers-add.component';

describe('SchTeachersAddComponent', () => {
  let component: SchTeachersAddComponent;
  let fixture: ComponentFixture<SchTeachersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchTeachersAddComponent]
    });
    fixture = TestBed.createComponent(SchTeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
