import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuApplicationsComponent} from './stu-applications.component';

describe('StuApplicationsComponent', () => {
  let component: StuApplicationsComponent;
  let fixture: ComponentFixture<StuApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuApplicationsComponent]
    });
    fixture = TestBed.createComponent(StuApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
