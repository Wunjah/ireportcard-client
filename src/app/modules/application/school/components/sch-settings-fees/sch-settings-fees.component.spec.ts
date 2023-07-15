import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchSettingsFeesComponent} from './sch-settings-fees.component';

describe('SchSettingsFeesComponent', () => {
  let component: SchSettingsFeesComponent;
  let fixture: ComponentFixture<SchSettingsFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsFeesComponent]
    });
    fixture = TestBed.createComponent(SchSettingsFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
