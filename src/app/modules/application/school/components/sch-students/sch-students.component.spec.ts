import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchStudentsComponent } from './sch-students.component';

describe('SchStudentsComponent', () => {
  let component: SchStudentsComponent;
  let fixture: ComponentFixture<SchStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchStudentsComponent]
    });
    fixture = TestBed.createComponent(SchStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
