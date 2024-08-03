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
  // checkAndResetConfirmationAt15() {
  //   const now = new Date();
  //   if (now.getHours() === 19 && now.getMinutes() === 0) {
  //     this.resetConfirmation();
  //   }
  // }

}
