import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/api/orders'; // URL API 

  constructor(private http: HttpClient) {}

  createOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteAllOrders(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
  updateOrder(id: number, order: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, order);
  }

  updateAllOrders(orders: any[]): Observable<any[]> {
    return this.http.put<any[]>(this.apiUrl, orders);
  }
}
