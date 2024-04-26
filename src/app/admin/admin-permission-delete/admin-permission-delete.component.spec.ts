import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminPermissionDeleteComponent } from './admin-permission-delete.component';

describe('AdminPermissionDeleteComponent', () => {
  let component: AdminPermissionDeleteComponent;
  let fixture: ComponentFixture<AdminPermissionDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPermissionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPermissionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
