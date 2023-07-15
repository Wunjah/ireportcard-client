import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuOnboardPaymentComponent} from './stu-onboard-payment.component';

describe('StuOnboardPaymentComponent', () => {
  let component: StuOnboardPaymentComponent;
  let fixture: ComponentFixture<StuOnboardPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuOnboardPaymentComponent]
    });
    fixture = TestBed.createComponent(StuOnboardPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
