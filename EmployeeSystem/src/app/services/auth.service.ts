// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  sub: string;
  roles: string[];
  exp: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return Date.now() < decoded.exp * 1000;
    } catch {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getUserRoles(): string[] {
    const token = this.getToken();
    if (!token) return [];
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.roles || [];
    } catch {
      return [];
    }
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }
}
