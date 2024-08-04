import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private readonly validUsername: string = 'benutzer';
  private readonly validPassword: string = 'passwort123';

  // Error flag to show invalid credentials message
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  isUsernameInvalid(): boolean {
    return this.username.trim().length === 0;
  }

  isPasswordInvalid(): boolean {
    return this.password.trim().length === 0;
  }

  login() {
    // Reset the error flag on each login attempt
    this.loginFailed = false;

    if (
      this.username === this.validUsername &&
      this.password === this.validPassword
    ) {
      this.router.navigate(['/buyer']);
    } else {
      // Set the error flag if login fails
      this.loginFailed = true;
    }
  }
}
