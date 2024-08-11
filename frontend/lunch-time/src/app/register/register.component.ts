import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    RouterModule,
  ],
})
export class RegisterComponent {
  registerForm: FormGroup;
  private buyerTokenValue = 'TOKEN1234';
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^@\\s]+@brockhaus\\.com$')]],
      buyerToken: [''],
    });
  }

  register(stepper: MatStepper) {
    if (this.registerForm.valid) {
      const { username, password, email, buyerToken } = this.registerForm.value;
      const role = buyerToken === this.buyerTokenValue ? 'buyer' : 'order';
      this.authService.register(username, password, email, role).subscribe(
        response => {
          console.log('Registration successful', response);
          this.errorMessage = null;
          stepper.next(); // Move to the next step if registration is successful
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.errorMessage = 'Benutzername oder E-Mail existiert bereits';
          } else {
            this.errorMessage = 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.';
          }
        }
      );
    }
  }
}
