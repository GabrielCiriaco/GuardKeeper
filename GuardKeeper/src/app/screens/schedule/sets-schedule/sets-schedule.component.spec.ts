import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsScheduleComponent } from './sets-schedule.component';

describe('SetsScheduleComponent', () => {
  let component: SetsScheduleComponent;
  let fixture: ComponentFixture<SetsScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetsScheduleComponent]
    });
    fixture = TestBed.createComponent(SetsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
