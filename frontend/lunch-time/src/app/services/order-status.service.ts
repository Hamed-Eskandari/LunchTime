import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {
  private ordersConfirmedSource = new BehaviorSubject<boolean>(false);
  ordersConfirmed$ = this.ordersConfirmedSource.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem('ordersConfirmed');
      this.ordersConfirmedSource.next(savedState === 'true');
    }
  }

  private saveConfirmationState(confirmed: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('ordersConfirmed', JSON.stringify(confirmed));
    }
  }

  confirmOrders() {
    this.saveConfirmationState(true);
    this.ordersConfirmedSource.next(true);
  }

  resetConfirmation() {
    this.saveConfirmationState(false);
    this.ordersConfirmedSource.next(false);
  }
}
