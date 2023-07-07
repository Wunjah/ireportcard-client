import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchClassesAddComponent } from './sch-classes-add.component';

describe('SchClassesAddComponent', () => {
  let component: SchClassesAddComponent;
  let fixture: ComponentFixture<SchClassesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchClassesAddComponent]
    });
    fixture = TestBed.createComponent(SchClassesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
