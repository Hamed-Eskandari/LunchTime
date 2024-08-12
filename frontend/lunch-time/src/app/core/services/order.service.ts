import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = '/api/orders'; // URL API

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  deleteAllOrders(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
  }

  updateAllOrders(orders: Order[]): Observable<Order[]> {
    return this.http.put<Order[]>(this.apiUrl, orders);
  }
}
