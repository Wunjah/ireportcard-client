import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchHomeComponent} from './sch-home.component';

describe('SchHomeComponent', () => {
  let component: SchHomeComponent;
  let fixture: ComponentFixture<SchHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchHomeComponent]
    });
    fixture = TestBed.createComponent(SchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
