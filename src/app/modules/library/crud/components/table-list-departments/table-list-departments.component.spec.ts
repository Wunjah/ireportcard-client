import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableListDepartmentsComponent} from './table-list-departments.component';

describe('TableListDepartmentsComponent', () => {
  let component: TableListDepartmentsComponent;
  let fixture: ComponentFixture<TableListDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListDepartmentsComponent]
    });
    fixture = TestBed.createComponent(TableListDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
