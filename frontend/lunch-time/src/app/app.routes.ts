import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { BuyerComponent } from './buyer/buyer.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'buyer',
    component: BuyerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' },
];
