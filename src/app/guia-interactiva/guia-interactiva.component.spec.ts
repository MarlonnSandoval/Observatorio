import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaInteractivaComponent } from './guia-interactiva.component';

describe('GuiaInteractivaComponent', () => {
  let component: GuiaInteractivaComponent;
  let fixture: ComponentFixture<GuiaInteractivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiaInteractivaComponent]
    });
    fixture = TestBed.createComponent(GuiaInteractivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
