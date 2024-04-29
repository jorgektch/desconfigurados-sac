import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoUsuarioComponent } from './acceso-usuario.component';

describe('AccesoUsuarioComponent', () => {
  let component: AccesoUsuarioComponent;
  let fixture: ComponentFixture<AccesoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
