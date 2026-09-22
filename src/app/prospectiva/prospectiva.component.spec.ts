import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectivaComponent } from './prospectiva.component';

describe('ProspectivaComponent', () => {
  let component: ProspectivaComponent;
  let fixture: ComponentFixture<ProspectivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectivaComponent]
    });
    fixture = TestBed.createComponent(ProspectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
