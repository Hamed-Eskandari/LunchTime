import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  login(username: string, password: string): boolean {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === 'benutzer' && password === 'passwort123') {
      this.setUserRole('buyer');
      return true;
    } else if (username === storedUsername && password === storedPassword) {
      this.setUserRole('order');
      return true;
    }
    return false;
  }

  logout() {
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.userRole !== null;
  }
}
