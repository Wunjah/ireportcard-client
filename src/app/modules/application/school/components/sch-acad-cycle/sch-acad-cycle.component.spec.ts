import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAcadCycleComponent } from './sch-acad-cycle.component';

describe('SchAcadCycleComponent', () => {
  let component: SchAcadCycleComponent;
  let fixture: ComponentFixture<SchAcadCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchAcadCycleComponent]
    });
    fixture = TestBed.createComponent(SchAcadCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
