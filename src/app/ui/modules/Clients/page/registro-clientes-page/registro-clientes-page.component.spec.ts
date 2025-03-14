import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClientesPageComponent } from './registro-clientes-page.component';

describe('RegistroClientesPageComponent', () => {
  let component: RegistroClientesPageComponent;
  let fixture: ComponentFixture<RegistroClientesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroClientesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
