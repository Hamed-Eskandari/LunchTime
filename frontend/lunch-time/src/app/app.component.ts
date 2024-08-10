import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lunch-time';
  showLogoutButton = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      
      const currentRoute = this.router.url;

      
      this.showLogoutButton =
        currentRoute.includes('/home') ||
        currentRoute.includes('/order') ||
        currentRoute.includes('/buyer');
    });

  }

  logout() {
    this.router.navigate(['/login']);
  }
}
