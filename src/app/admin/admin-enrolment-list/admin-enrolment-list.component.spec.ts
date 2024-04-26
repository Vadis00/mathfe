import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminEnrolmentListComponent } from './admin-enrolment-list.component';

describe('AdminEnrolmentListComponent', () => {
  let component: AdminEnrolmentListComponent;
  let fixture: ComponentFixture<AdminEnrolmentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEnrolmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnrolmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
