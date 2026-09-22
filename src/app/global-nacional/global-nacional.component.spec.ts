import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNacionalComponent } from './global-nacional.component';

describe('GlobalNacionalComponent', () => {
  let component: GlobalNacionalComponent;
  let fixture: ComponentFixture<GlobalNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalNacionalComponent]
    });
    fixture = TestBed.createComponent(GlobalNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
