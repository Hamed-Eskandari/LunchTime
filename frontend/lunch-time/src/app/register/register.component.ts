import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, this.usernameExistsValidator.bind(this)]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^@\\s]+@brockhaus\\.com$'), this.emailExistsValidator.bind(this)]],
    });
  }
  usernameExistsValidator(control: AbstractControl) {
    const username = control.value;
    
        
    const storedUsername = localStorage.getItem('username');

    if (storedUsername && storedUsername === username) {
      return { usernameExists: true };
    }
    return null;
  }

  emailExistsValidator(control: AbstractControl) {
    const email = control.value;
    const storedEmail = localStorage.getItem('email');

    if (storedEmail && storedEmail === email) {
      return { emailExists: true };
    }
    return null;
  }

  register() {
    if (this.registerForm.valid) {
      const username = this.registerForm.get('username')?.value;
      const password = this.registerForm.get('password')?.value;
      const email = this.registerForm.get('email')?.value;


     
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);
      
    }
  }


}
