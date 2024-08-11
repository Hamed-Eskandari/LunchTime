import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  isUsernameInvalid(): boolean {
    return this.username.trim().length === 0;
  }

  isPasswordInvalid(): boolean {
    return this.password.trim().length === 0;
  }

  login() {
    this.loginFailed = false;

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
          this.authService.setUserRole(response.user.role);
            this.router.navigate(['/home']);
      },
      (error) => {
          console.error('Login failed', error);
          this.loginFailed = true;
      }
   );
  }
}
