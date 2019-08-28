import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughComponentComponent } from './rough-component.component';

describe('RoughComponentComponent', () => {
  let component: RoughComponentComponent;
  let fixture: ComponentFixture<RoughComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoughComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
