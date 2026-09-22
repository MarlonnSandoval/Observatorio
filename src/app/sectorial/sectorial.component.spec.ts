import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorialComponent } from './sectorial.component';

describe('SectorialComponent', () => {
  let component: SectorialComponent;
  let fixture: ComponentFixture<SectorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorialComponent]
    });
    fixture = TestBed.createComponent(SectorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
