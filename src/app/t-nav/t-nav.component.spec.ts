import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNavComponent } from './t-nav.component';

describe('TNavComponent', () => {
  let component: TNavComponent;
  let fixture: ComponentFixture<TNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TNavComponent]
    });
    fixture = TestBed.createComponent(TNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
