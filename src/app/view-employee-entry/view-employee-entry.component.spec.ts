import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeEntryComponent } from './view-employee-entry.component';

describe('ViewEmployeeEntryComponent', () => {
  let component: ViewEmployeeEntryComponent;
  let fixture: ComponentFixture<ViewEmployeeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
