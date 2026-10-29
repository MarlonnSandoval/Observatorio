import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoPlazoComponent } from './largo-plazo.component';

describe('LargoPlazoComponent', () => {
  let component: LargoPlazoComponent;
  let fixture: ComponentFixture<LargoPlazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargoPlazoComponent]
    });
    fixture = TestBed.createComponent(LargoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
