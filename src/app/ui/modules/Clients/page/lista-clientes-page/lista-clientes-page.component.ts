import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './lista-clientes-page.component.html',
  styleUrl: './lista-clientes-page.component.css'
})
export class ListaClientesPageComponent {
  searchTerm: string = '';

filteredFolders() {
  return this.folders.filter(folder =>
    folder.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
  folders = [
    { name: 'Arles Trolantains', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Claudio Paul', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 1', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 2', updated: new Date(), showDelete: false, translateX: 0 },
    { name: 'Cliente 3', updated: new Date(), showDelete: false, translateX: 0 },
  ];
}
