import { DatePipe } from '@angular/common';
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
    FormsModule
  ],
  templateUrl: './lista-clientes-page.component.html',
  styleUrl: './lista-clientes-page.component.css'
})
export class ListaClientesPageComponent {

  mostrarBoton(folder: any) {
    // Lógica para hacer visible el botón de eliminar
  }

  ocultarBoton(folder: any) {
    // Lógica para ocultar el botón de eliminar
  }

  eliminar(folder: any) {
    console.log('Eliminando:', folder);
  }

  folders: Section[] = [
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Edwin Seclen',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Claudio Paul',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Jhosimar Trolentino',
      updated: new Date('1/28/16'),
    },
  ];
}
