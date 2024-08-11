import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;
  private apiUrl = '/api/user';

  constructor(private http: HttpClient) {}

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        this.userRole = response.user.role;
      })
    );
}

  register(username: string, password: string, email: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, {
      username,
      password,
      email,
      role,
    });
  }

  logout() {
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.userRole !== null;
  }
}
