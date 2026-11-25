import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTerComponent } from './t-ter.component';

describe('TTerComponent', () => {
  let component: TTerComponent;
  let fixture: ComponentFixture<TTerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TTerComponent]
    });
    fixture = TestBed.createComponent(TTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
