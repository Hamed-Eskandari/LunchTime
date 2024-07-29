import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
  ],
})
export class BuyerComponent implements OnInit {
  firstFormGroup: FormGroup;
  orders: any[] = [];
  displayedColumns: string[] = ['name', 'order', 'restaurant', 'price', 'time'];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({});
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
    }
  }

  printOrders() {
    window.print();
  }

  finalizeOrders() {
    
  }
}
