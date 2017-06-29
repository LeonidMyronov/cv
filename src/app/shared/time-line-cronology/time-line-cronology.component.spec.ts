import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineCronologyComponent } from './time-line-cronology.component';

describe('TimeLineCronologyComponent', () => {
  let component: TimeLineCronologyComponent;
  let fixture: ComponentFixture<TimeLineCronologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineCronologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineCronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
