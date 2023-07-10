import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchSettingsGeneralComponent} from './sch-settings-general.component';

describe('SchSettingsGeneralComponent', () => {
  let component: SchSettingsGeneralComponent;
  let fixture: ComponentFixture<SchSettingsGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsGeneralComponent]
    });
    fixture = TestBed.createComponent(SchSettingsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
