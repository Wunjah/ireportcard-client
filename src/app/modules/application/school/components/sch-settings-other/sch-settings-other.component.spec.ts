import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchSettingsOtherComponent} from './sch-settings-other.component';

describe('SchSettingsOtherComponent', () => {
  let component: SchSettingsOtherComponent;
  let fixture: ComponentFixture<SchSettingsOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsOtherComponent]
    });
    fixture = TestBed.createComponent(SchSettingsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
