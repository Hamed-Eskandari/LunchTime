import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,MatButtonModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private readonly validUsername: string = 'user';
  private readonly validPassword: string = 'pass123';

  constructor(private router: Router) {}

  login() {
    if (
      this.username === this.validUsername &&
      this.password === this.validPassword
    ) {
      this.router.navigate(['/buyer']);
    } else {
      alert('Der Benutzername oder das Passwort ist falsch.');
    }
  }
}
