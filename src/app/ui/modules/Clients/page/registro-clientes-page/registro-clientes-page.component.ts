import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-registro-clientes-page',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatListModule,
    MatCardTitle,
    MatFormField,
    MatLabel,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registro-clientes-page.component.html',
  styleUrl: './registro-clientes-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegistroClientesPageComponent {
  private _bottomSheetRef =
  inject<MatBottomSheetRef<RegistroClientesPageComponent>>(MatBottomSheetRef);

openLink(event: MouseEvent): void {
  this._bottomSheetRef.dismiss();
  event.preventDefault();
}

clienteForm: FormGroup;
velocidades = [10, 20, 50, 100, 200, 500]; // Opciones de velocidad de internet

constructor(private fb: FormBuilder) {
  this.clienteForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    telefono: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    ip: ['', Validators.required],
    puntos: ['', [Validators.required, Validators.min(1)]],
    velocidad: ['', Validators.required],
    metodoPago: ['', Validators.required],
  });
}

registrarCliente() {
  if (this.clienteForm.valid) {
    console.log('Datos del Cliente:', this.clienteForm.value);
    alert('Cliente registrado con éxito');
    this.clienteForm.reset();
  }
}

}
