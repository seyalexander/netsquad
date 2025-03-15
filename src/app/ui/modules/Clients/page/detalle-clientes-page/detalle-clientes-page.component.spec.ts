import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClientesPageComponent } from './detalle-clientes-page.component';

describe('DetalleClientesPageComponent', () => {
  let component: DetalleClientesPageComponent;
  let fixture: ComponentFixture<DetalleClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleClientesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
