import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSecComponent } from './t-sec.component';

describe('TSecComponent', () => {
  let component: TSecComponent;
  let fixture: ComponentFixture<TSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TSecComponent]
    });
    fixture = TestBed.createComponent(TSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
