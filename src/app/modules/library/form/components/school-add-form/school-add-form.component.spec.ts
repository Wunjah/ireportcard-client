import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAddFormComponent } from './school-add-form.component';

describe('SchoolAddFormComponent', () => {
  let component: SchoolAddFormComponent;
  let fixture: ComponentFixture<SchoolAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolAddFormComponent]
    });
    fixture = TestBed.createComponent(SchoolAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
