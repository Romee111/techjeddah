import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestominalsComponent } from './testominals.component';

describe('TestominalsComponent', () => {
  let component: TestominalsComponent;
  let fixture: ComponentFixture<TestominalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestominalsComponent]
    });
    fixture = TestBed.createComponent(TestominalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
