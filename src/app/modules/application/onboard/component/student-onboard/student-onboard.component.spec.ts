import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentOnboardComponent} from './student-onboard.component';

describe('StudentOnboardComponent', () => {
  let component: StudentOnboardComponent;
  let fixture: ComponentFixture<StudentOnboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentOnboardComponent]
    });
    fixture = TestBed.createComponent(StudentOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
