import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchStudentsAddComponent } from './sch-students-add.component';

describe('OrgStudentsAddComponent', () => {
  let component: SchStudentsAddComponent;
  let fixture: ComponentFixture<SchStudentsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchStudentsAddComponent]
    });
    fixture = TestBed.createComponent(SchStudentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
