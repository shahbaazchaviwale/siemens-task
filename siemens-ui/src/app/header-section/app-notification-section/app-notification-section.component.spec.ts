import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotificationSectionComponent } from './app-notification-section.component';

describe('AppNotificationSectionComponent', () => {
  let component: AppNotificationSectionComponent;
  let fixture: ComponentFixture<AppNotificationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNotificationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotificationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
