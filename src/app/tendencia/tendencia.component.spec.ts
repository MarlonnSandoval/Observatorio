import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciaComponent } from './tendencia.component';

describe('TendenciaComponent', () => {
  let component: TendenciaComponent;
  let fixture: ComponentFixture<TendenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TendenciaComponent]
    });
    fixture = TestBed.createComponent(TendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
