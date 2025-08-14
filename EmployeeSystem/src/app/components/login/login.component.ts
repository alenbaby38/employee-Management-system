// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OAuth2Component } from '../oauth2/oauth2.component';
import { jwtDecode } from 'jwt-decode';
import { RegisterComponent } from '../register/register.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, OAuth2Component, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router, private toasterservice:ToastrService) {}

  login() {
    const url = 'http://localhost:8081/auth/login'; // backend URL

    this.http.post<{ token: string }>(url, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('jwtToken', res.token);

        try {
          const decoded: any = jwtDecode(res.token);
          const roles: string[] = decoded.roles || decoded.authorities || [];

          if (roles.includes('MANAGER')) {
            this.router.navigate(['/manager-dashboard']);
          } else if (roles.includes('EMPLOYEE')) {
            this.router.navigate(['/profile']);
          } else {
            this.error = 'User role not recognized.';
            localStorage.removeItem('jwtToken');
          }
        } catch (e) {
          this.error = 'Invalid token received.';
          localStorage.removeItem('jwtToken');
        }
      },
      error: () => {
         this.toasterservice.error( 'Invalid credentials');
      }
    });
  }
}

