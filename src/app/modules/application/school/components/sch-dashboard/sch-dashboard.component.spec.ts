import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchDashboardComponent} from './sch-dashboard.component';

describe('SchDashboardComponent', () => {
  let component: SchDashboardComponent;
  let fixture: ComponentFixture<SchDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchDashboardComponent]
    });
    fixture = TestBed.createComponent(SchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
