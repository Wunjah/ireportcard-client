import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuOnboardGuardianComponent} from './stu-onboard-guardian.component';

describe('StuOnboardGuardianComponent', () => {
  let component: StuOnboardGuardianComponent;
  let fixture: ComponentFixture<StuOnboardGuardianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuOnboardGuardianComponent]
    });
    fixture = TestBed.createComponent(StuOnboardGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
