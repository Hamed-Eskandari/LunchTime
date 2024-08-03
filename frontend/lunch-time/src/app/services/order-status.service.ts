import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {
  private ordersConfirmedSource = new BehaviorSubject<boolean>(false);
  ordersConfirmed$ = this.ordersConfirmedSource.asObservable();

  confirmOrders() {
    this.ordersConfirmedSource.next(true);
  }

  resetConfirmation() {
    this.ordersConfirmedSource.next(false);
  }
}
