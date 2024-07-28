import { Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'order', component: OrderComponent },
    { path: 'buyer', component: BuyerComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
