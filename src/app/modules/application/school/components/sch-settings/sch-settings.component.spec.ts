import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchSettingsComponent } from './sch-settings.component';

describe('SchSettingsComponent', () => {
  let component: SchSettingsComponent;
  let fixture: ComponentFixture<SchSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsComponent]
    });
    fixture = TestBed.createComponent(SchSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
