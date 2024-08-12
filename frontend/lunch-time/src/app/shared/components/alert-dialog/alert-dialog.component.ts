import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class AlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
