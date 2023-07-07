import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListClassesComponent } from './table-list-classes.component';

describe('TableListClassesComponent', () => {
  let component: TableListClassesComponent;
  let fixture: ComponentFixture<TableListClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListClassesComponent]
    });
    fixture = TestBed.createComponent(TableListClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
