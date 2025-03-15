import { CommonModule, NgClass } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'recibo-clientes-page',
  imports: [
    MatIcon,
    CommonModule
  ],
  templateUrl: './recibo-clientes-page.component.html',
  styleUrl: './recibo-clientes-page.component.css'
})
export class ReciboClientesPageComponent {
  constructor(
    public dialogRef: MatDialogRef<ReciboClientesPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrar() {
    this.dialogRef.close();
  }


}
