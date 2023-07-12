import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuOnboardConfirmationComponent} from './stu-onboard-confirmation.component';

describe('StuOnboardConfirmationComponent', () => {
  let component: StuOnboardConfirmationComponent;
  let fixture: ComponentFixture<StuOnboardConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuOnboardConfirmationComponent]
    });
    fixture = TestBed.createComponent(StuOnboardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
