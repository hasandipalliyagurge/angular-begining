import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeOverviewComponent } from './emplyee-overview.component';

describe('EmplyeeOverviewComponent', () => {
  let component: EmplyeeOverviewComponent;
  let fixture: ComponentFixture<EmplyeeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
