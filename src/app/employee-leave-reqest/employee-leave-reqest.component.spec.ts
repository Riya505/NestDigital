import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveReqestComponent } from './employee-leave-reqest.component';

describe('EmployeeLeaveReqestComponent', () => {
  let component: EmployeeLeaveReqestComponent;
  let fixture: ComponentFixture<EmployeeLeaveReqestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveReqestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveReqestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
