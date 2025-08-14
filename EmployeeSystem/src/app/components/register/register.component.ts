import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  role = 'EMPLOYEE'; // default role
  message = '';
  error = '';
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toasterservice: ToastrService
  ) {}

  register() {
    this.message = '';
    this.error = '';

    // Validate required fields before making the HTTP call
    if (!this.username.trim() || !this.password.trim()) {
      this.toasterservice.error('Username and Password are required.', 'Validation Error');
      return;
    }

    this.loading = true;

    const url = 'http://localhost:8081/auth/register';
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.http.post<{ message?: string }>(url, user).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res.message || 'Registration successful! Redirecting to login...';
        this.error = '';

        // Reset form fields
        this.username = '';
        this.email = '';
        this.password = '';
        this.role = 'EMPLOYEE';

        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.loading = false;
        if (err.error) {
          if (typeof err.error === 'string') {
            this.error = err.error;
          } else if (err.error.message) {
            this.error = err.error.message;
          } else {
            this.error = JSON.stringify(err.error);
          }
        } else {
          this.toasterservice.error('Registration failed. Please try again.');
        }
      }
    });
  }
}
