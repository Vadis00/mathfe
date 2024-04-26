import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminTypeListComponent } from './admin-type-list.component';

describe('AdminTypeListComponent', () => {
  let component: AdminTypeListComponent;
  let fixture: ComponentFixture<AdminTypeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
