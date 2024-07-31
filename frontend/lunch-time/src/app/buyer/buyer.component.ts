import { Component, Inject, PLATFORM_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class BuyerComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = ['name', 'order', 'restaurant', 'price', 'time'];
  firstFormGroup: FormGroup;
  isBrowser: boolean;
  
  dataSource = new MatTableDataSource<any>(this.orders);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _formBuilder: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
    this.firstFormGroup = this._formBuilder.group({});
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.loadOrders();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadOrders() {
    if (this.isBrowser) {
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        this.orders = JSON.parse(storedOrders);
        this.dataSource.data = this.orders;
      }
    }
  }

  updatePrice(element: any, event: any) {
    if (this.isBrowser) {
      element.price = event.target.value;
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }

  printOrders() {
    if (this.isBrowser) {
      window.print();
    }
  }

  finalizeOrders() {
    if (this.isBrowser) {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }

  clearOrders() {
    if (this.isBrowser) {
      localStorage.removeItem('orders');
      this.orders = [];
      this.dataSource.data = [];
    }
    alert("Alle Daten in der Tabelle wurden gelöscht");
  }
}

