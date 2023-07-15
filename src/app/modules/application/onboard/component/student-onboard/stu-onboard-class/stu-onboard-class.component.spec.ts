import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuOnboardClassComponent} from './stu-onboard-class.component';

describe('StuOnboardClassComponent', () => {
  let component: StuOnboardClassComponent;
  let fixture: ComponentFixture<StuOnboardClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuOnboardClassComponent]
    });
    fixture = TestBed.createComponent(StuOnboardClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
