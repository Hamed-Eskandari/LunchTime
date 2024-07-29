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
  firstFormGroup: FormGroup;
  restaurants: string[] = [
    'Restaurant 1',
    'Restaurant 2',
    'Restaurant 3',
    'Restaurant 4',
    'Restaurant 5',
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      order: ['', [Validators.required, Validators.maxLength(100)]],
      restaurant: ['', Validators.required],
      price: [''],
      paid: [''],
      accompany: [''],
    });
  }
  onSubmit() {
    if (this.firstFormGroup.invalid) {
      this.firstFormGroup.markAllAsTouched();
      return;
    }
    this.submitOrder();
  }
  submitOrder() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(this.firstFormGroup.value);
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}
