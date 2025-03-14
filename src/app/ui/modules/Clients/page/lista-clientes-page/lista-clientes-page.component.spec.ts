import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesPageComponent } from './lista-clientes-page.component';

describe('ListaClientesPageComponent', () => {
  let component: ListaClientesPageComponent;
  let fixture: ComponentFixture<ListaClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaClientesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
