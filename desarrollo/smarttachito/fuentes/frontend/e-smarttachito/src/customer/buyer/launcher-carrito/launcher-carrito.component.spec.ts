import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaucherCarritoComponent } from './launcher-carrito.component';

describe('LaucherCarritoComponent', () => {
  let component: LaucherCarritoComponent;
  let fixture: ComponentFixture<LaucherCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaucherCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaucherCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
