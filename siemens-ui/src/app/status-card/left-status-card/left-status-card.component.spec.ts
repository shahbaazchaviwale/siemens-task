import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftStatusCardComponent } from './left-status-card.component';

describe('LeftStatusCardComponent', () => {
  let component: LeftStatusCardComponent;
  let fixture: ComponentFixture<LeftStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
