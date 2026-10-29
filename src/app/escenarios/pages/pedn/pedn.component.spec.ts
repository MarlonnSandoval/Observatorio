import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEDNComponent } from './pedn.component';

describe('PEDNComponent', () => {
  let component: PEDNComponent;
  let fixture: ComponentFixture<PEDNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PEDNComponent]
    });
    fixture = TestBed.createComponent(PEDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
