import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { OrderStatusService } from '../services/order-status.service';
import { AuthService } from '../services/auth.service';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule, MatIconModule, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  role: string | null;

  constructor(
    private orderStatusService: OrderStatusService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.role = this.authService.getUserRole();
  }

  resetConfirmation() {
    this.orderStatusService.resetConfirmation();
    this.dialog.open(AlertDialogComponent, {
      data: { message: 'Bestellungen geöffnet' },
    });
  }
}
