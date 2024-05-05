import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesCarritoComponent } from './notificaciones-carrito.component';

describe('NotificacionesCarritoComponent', () => {
  let component: NotificacionesCarritoComponent;
  let fixture: ComponentFixture<NotificacionesCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacionesCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
