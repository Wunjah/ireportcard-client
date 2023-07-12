import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuOnboardPersonalComponent} from './stu-onboard-personal.component';

describe('StuOnboardPersonalComponent', () => {
  let component: StuOnboardPersonalComponent;
  let fixture: ComponentFixture<StuOnboardPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuOnboardPersonalComponent]
    });
    fixture = TestBed.createComponent(StuOnboardPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
