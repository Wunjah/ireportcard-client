import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchTeachersComponent} from './sch-teachers.component';

describe('SchTeachersComponent', () => {
  let component: SchTeachersComponent;
  let fixture: ComponentFixture<SchTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchTeachersComponent]
    });
    fixture = TestBed.createComponent(SchTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
