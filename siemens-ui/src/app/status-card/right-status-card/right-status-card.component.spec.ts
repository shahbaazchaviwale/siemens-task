import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightStatusCardComponent } from './right-status-card.component';

describe('RightStatusCardComponent', () => {
  let component: RightStatusCardComponent;
  let fixture: ComponentFixture<RightStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
