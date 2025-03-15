import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import RegistroClientesPageComponent from '../registro-clientes-page/registro-clientes-page.component';
import Swal from 'sweetalert2'
import { DetalleClientesPageComponent } from '../detalle-clientes-page/detalle-clientes-page.component';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lista-clientes-page',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    RouterLink,
    MatGridListModule,
    DatePipe,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './lista-clientes-page.component.html',
  styleUrl: './lista-clientes-page.component.css'
})
export class ListaClientesPageComponent {
  searchTerm: string = '';
  ShowOpcionesItem: boolean = false


  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(RegistroClientesPageComponent);
  }

  pressTimer: any;

  startPress(event: Event, folder: any) {
    this.pressTimer = setTimeout(() => {
      this.folders.forEach(f => f.selected = false);
      folder.selected = true;
      this.ShowOpcionesItem = true;
    }, 1000);
  }

  cancelPress() {
    clearTimeout(this.pressTimer);
  }

  clearSelection() {
    this.folders.forEach(folder => folder.selected = false);
    this.ShowOpcionesItem = false;
  }

  showDetalleCliente: boolean = false
  MostrarDetalle():void {
    this._bottomSheet.open(DetalleClientesPageComponent);
  }

  filteredFolders() {
    return this.folders.filter(folder =>
      folder.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  folders = [
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0, selected: false },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0, selected: false },
  ];

  compartirCliente() {
    if (navigator.share) {
      const clienteSeleccionado = this.folders.find(folder => folder.selected);

      if (!clienteSeleccionado) return;

      navigator.share({
        title: 'Compartir Cliente',
        text: `Te comparto la información de ${clienteSeleccionado.name}`,
        url: window.location.href // O puedes generar un link específico con ID
      }).then(() => {
        console.log('Compartido exitosamente');
      }).catch((error) => {
        console.error('Error al compartir:', error);
      });
    } else {
      alert('Tu navegador no soporta compartir contenido.');
    }
  }


  Alert_EliminarCliente(response: any) {
    let countdown = 3; // Cuenta regresiva inicial

    Swal.fire({
      title: `<div class="text-red-600 text-2xl font-bold flex items-center justify-center">
                <span>Eliminar Cliente</span>
              </div>`,
      html: `
        <div class="border-b border-gray-300 pb-4">
          <p class="text-gray-700 text-lg text-center">
            ¿Seguro que deseas eliminar a <span class="font-bold text-red-500">${response.descripcion}</span>?
          </p>
        </div>

        <div class="mt-4 text-left space-y-3">
          <p class="text-gray-600 text-sm text-center">Esta acción no se puede deshacer.</p>
          <p class="text-gray-600 text-sm text-center">Asegúrate de revisar antes de continuar.</p>
        </div>

        <!-- Contenedor de botones para asegurar su visibilidad -->
        <div id="swal-buttons" class="flex justify-center gap-4 mt-5">
          <button id="cancel-btn" class="bg-gray-500 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded w-36">
            Cancelar
          </button>
          <button id="confirm-btn" class="bg-red-600  text-white font-semibold px-4 py-2 rounded w-36" disabled>
            Sí, Eliminar (3)
          </button>
        </div>
      `,
      icon: "warning",
      showConfirmButton: false, // Ocultamos botones nativos de SweetAlert
      showCancelButton: false,
      didOpen: () => {
        const cancelBtn = document.getElementById("cancel-btn") as HTMLButtonElement;
        const confirmBtn = document.getElementById("confirm-btn") as HTMLButtonElement;

        if (cancelBtn) {
          cancelBtn.onclick = () => Swal.close(); // Cierra la alerta
        }

        // Iniciar cuenta regresiva
        const interval = setInterval(() => {
          countdown--;
          confirmBtn.textContent = `Sí, Eliminar (${countdown})`;

          if (countdown === 0) {
            clearInterval(interval);
            confirmBtn.textContent = "Sí, Eliminar";
            confirmBtn.disabled = false;
            confirmBtn.classList.add("hover:bg-red-700"); // Activa el hover
          }
        }, 1000);

        if (confirmBtn) {
          confirmBtn.onclick = () => {
            Swal.close();

          };
        }
      },
    });
  }
}
