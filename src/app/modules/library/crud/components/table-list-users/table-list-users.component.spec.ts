import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableListUsersComponent} from './table-list-users.component';

describe('TableUsersListComponent', () => {
  let component: TableListUsersComponent;
  let fixture: ComponentFixture<TableListUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListUsersComponent]
    });
    fixture = TestBed.createComponent(TableListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
