import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterFormComponent } from './admin-register-form.component';

describe('AdminRegisterFormComponent', () => {
  let component: AdminRegisterFormComponent;
  let fixture: ComponentFixture<AdminRegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegisterFormComponent]
    });
    fixture = TestBed.createComponent(AdminRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
