import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboClientesPageComponent } from './recibo-clientes-page.component';

describe('ReciboClientesPageComponent', () => {
  let component: ReciboClientesPageComponent;
  let fixture: ComponentFixture<ReciboClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciboClientesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
