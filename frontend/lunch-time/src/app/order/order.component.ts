import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { OrderStatusService } from '../services/order-status.service';
import { isPlatformBrowser } from '@angular/common';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
})
export class OrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  ordersConfirmed: boolean = false;
  isBrowser: boolean;
  restaurants: string[] = [
    'Restaurant 1',
    'Restaurant 2',
    'Restaurant 3',
    'Restaurant 4',
    'Restaurant 5',
  ];
  datePipe = new DatePipe('en-US');

  constructor(
    private fb: FormBuilder,
    private orderStatusService: OrderStatusService,
    @Inject(PLATFORM_ID) private platformId: any,
    private orderService: OrderService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', [Validators.required, Validators.maxLength(100)]],
      restaurant: ['', Validators.required],
      price: [''],
      paid: ['', Validators.required],
      accompany: [''],
    });
    this.orderForm.get('paid')?.valueChanges.subscribe((value) => {
      const priceControl = this.orderForm.get('price');
      if (value === 'yes') {
        priceControl?.setValidators([
          Validators.required,
          Validators.min(0.01),
        ]);
      } else {
        priceControl?.clearValidators();
      }
      priceControl?.updateValueAndValidity();
    });
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.orderStatusService.ordersConfirmed$.subscribe((confirmed) => {
        this.ordersConfirmed = confirmed;
      });
    }
  }

  ngOnDestroy() {
    // if (this.timer) {
    //   clearInterval(this.timer);
    // }
  }

  checkPaidField() {
    const paidControl = this.orderForm.get('paid');
    if (paidControl?.invalid) {
      paidControl.markAsTouched();
    }
  }

  get paypalLink(): string {
    const price = this.orderForm.controls['price'].value;
    if (!price || isNaN(price) || price <= 0) {
      return '';
    }
    const businessEmail = 'hamed_eskandari71@yahoo.com';
    const currencyCode = 'EUR';
    const itemName = encodeURIComponent('Order Payment');
    return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(
      businessEmail
    )}&item_name=${itemName}&amount=${parseFloat(price).toFixed(
      2
    )}&currency_code=${currencyCode}`;
  }

  submitOrder() {
    if (this.isBrowser && this.orderForm.valid) {
      const currentDate = new Date();
      const day = this.datePipe.transform(currentDate, 'dd.MM.yyyy');
      const orderData = {
        name: this.orderForm.get('name')?.value,
        order: this.orderForm.get('order')?.value,
        restaurant: this.orderForm.get('restaurant')?.value,
        price: this.orderForm.get('price')?.value,
        paid: this.orderForm.get('paid')?.value,
        accompany: this.orderForm.get('accompany')?.value,
        time: currentDate.toLocaleTimeString(),
        day: day,
      };


      this.orderService.createOrder(orderData).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          this.orderForm.reset();
          
        },
        (error) => {
          console.error('Error creating order:', error);
          
        }
      );
    } else {
      Object.keys(this.orderForm.controls).forEach((field) => {
        const control = this.orderForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
