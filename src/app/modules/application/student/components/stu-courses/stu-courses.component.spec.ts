import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuCoursesComponent} from './stu-courses.component';

describe('StuCoursesComponent', () => {
  let component: StuCoursesComponent;
  let fixture: ComponentFixture<StuCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuCoursesComponent]
    });
    fixture = TestBed.createComponent(StuCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
