import { Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }, // Redirect to 'home' for any other unknown routes
];
