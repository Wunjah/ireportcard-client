import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DatafilterComponent} from './datafilter.component';

describe('DataFilterComponent', () => {
  let component: DatafilterComponent;
  let fixture: ComponentFixture<DatafilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatafilterComponent]
    });
    fixture = TestBed.createComponent(DatafilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
