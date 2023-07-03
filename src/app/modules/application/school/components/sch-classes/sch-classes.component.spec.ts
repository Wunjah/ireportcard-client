import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchClassesComponent} from './sch-classes.component';

describe('SchClassesComponent', () => {
  let component: SchClassesComponent;
  let fixture: ComponentFixture<SchClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchClassesComponent]
    });
    fixture = TestBed.createComponent(SchClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
