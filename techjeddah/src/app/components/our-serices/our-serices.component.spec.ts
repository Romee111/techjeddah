import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSericesComponent } from './our-serices.component';

describe('OurSericesComponent', () => {
  let component: OurSericesComponent;
  let fixture: ComponentFixture<OurSericesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSericesComponent]
    });
    fixture = TestBed.createComponent(OurSericesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
