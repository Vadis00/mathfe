import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseEditComponent } from './admin-house-edit.component';

describe('AdminHouseEditComponent', () => {
  let component: AdminHouseEditComponent;
  let fixture: ComponentFixture<AdminHouseEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
