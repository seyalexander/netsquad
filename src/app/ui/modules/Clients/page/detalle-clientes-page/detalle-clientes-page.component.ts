import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'detalle-clientes-page',
  imports: [
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatCard
  ],
  templateUrl: './detalle-clientes-page.component.html',
  styleUrl: './detalle-clientes-page.component.css'
})
export class DetalleClientesPageComponent {

}
