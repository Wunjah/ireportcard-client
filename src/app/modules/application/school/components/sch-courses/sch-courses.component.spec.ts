import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchCoursesComponent} from './sch-courses.component';

describe('SchCoursesComponent', () => {
  let component: SchCoursesComponent;
  let fixture: ComponentFixture<SchCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchCoursesComponent]
    });
    fixture = TestBed.createComponent(SchCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
