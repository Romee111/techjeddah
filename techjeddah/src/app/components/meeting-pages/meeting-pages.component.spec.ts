import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingPagesComponent } from './meeting-pages.component';

describe('MeetingPagesComponent', () => {
  let component: MeetingPagesComponent;
  let fixture: ComponentFixture<MeetingPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingPagesComponent]
    });
    fixture = TestBed.createComponent(MeetingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
