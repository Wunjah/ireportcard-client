import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchSettingsEmailComponent } from './sch-settings-email.component';

describe('SchSettingsEmailComponent', () => {
  let component: SchSettingsEmailComponent;
  let fixture: ComponentFixture<SchSettingsEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsEmailComponent]
    });
    fixture = TestBed.createComponent(SchSettingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
