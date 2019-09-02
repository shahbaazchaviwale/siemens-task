import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTitleSectionComponent } from './app-title-section.component';

describe('AppTitleSectionComponent', () => {
  let component: AppTitleSectionComponent;
  let fixture: ComponentFixture<AppTitleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTitleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
