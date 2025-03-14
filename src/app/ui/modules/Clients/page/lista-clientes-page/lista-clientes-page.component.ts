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
      this.folders.forEach(f => f.selected = false); // Desmarca los demás
      folder.selected = true; // Marca el seleccionado
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
}
