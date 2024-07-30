import { Component } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
})
export class OrderComponent {
  orderForm: FormGroup;
  restaurants: string[] = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3', 'Restaurant 4', 'Restaurant 5'];

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', [Validators.required, Validators.maxLength(500)]],
      restaurant: ['', Validators.required],
      price: [''],
      paid: [''],
      accompany: ['']
    });
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push({ 
        name: this.orderForm.get('name')?.value,
        order: this.orderForm.get('order')?.value,
        restaurant: this.orderForm.get('restaurant')?.value,
        price: this.orderForm.get('price')?.value,
        paid: this.orderForm.get('paid')?.value,
        accompany: this.orderForm.get('accompany')?.value,
        time: new Date().toLocaleTimeString()
      });
      localStorage.setItem('orders', JSON.stringify(orders));
      this.orderForm.reset();
    } else {
      Object.keys(this.orderForm.controls).forEach(field => {
        const control = this.orderForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
