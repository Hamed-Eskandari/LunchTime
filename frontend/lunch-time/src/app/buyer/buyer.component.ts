import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';

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
    MatPaginatorModule,
    MatIconModule,
  ],
})
export class BuyerComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = [
    'index',
    'name',
    'order',
    'restaurant',
    'price',
    'day',
    'time',
    'paid',
    'accompany',
  ];
  firstFormGroup: FormGroup;
  isBrowser: boolean;

  dataSource = new MatTableDataSource<any>(this.orders);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dialog: MatDialog
  ) {
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Sind Sie sicher, dass Sie die Daten löschen möchten?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.removeItem('orders');
        this.orders = [];
        this.dataSource.data = [];
        this.dialog.open(AlertDialogComponent, {
          data: { message: 'Alle Daten wurden gelöscht.' }
        });
      }
    });
  }

  downloadCSV() {
    const csvData = this.convertToCSV(this.orders);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'orders.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  convertToCSV(objArray: any[]) {
    const header = Object.keys(objArray[0]).join(',');
    const rows = objArray.map((obj) => Object.values(obj).join(','));
    return [header, ...rows].join('\r\n');
  }
}
