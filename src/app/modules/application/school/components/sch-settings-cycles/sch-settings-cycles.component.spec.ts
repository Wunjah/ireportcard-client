import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchSettingsCyclesComponent } from './sch-settings-cycles.component';

describe('SchSettingsCyclesComponent', () => {
  let component: SchSettingsCyclesComponent;
  let fixture: ComponentFixture<SchSettingsCyclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchSettingsCyclesComponent]
    });
    fixture = TestBed.createComponent(SchSettingsCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
