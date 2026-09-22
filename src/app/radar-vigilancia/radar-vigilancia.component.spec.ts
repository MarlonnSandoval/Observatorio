import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarVigilanciaComponent } from './radar-vigilancia.component';

describe('RadarVigilanciaComponent', () => {
  let component: RadarVigilanciaComponent;
  let fixture: ComponentFixture<RadarVigilanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadarVigilanciaComponent]
    });
    fixture = TestBed.createComponent(RadarVigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
