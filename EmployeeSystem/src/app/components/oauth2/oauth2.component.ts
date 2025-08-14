// src/app/components/oauth2/oauth2.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import {jwtDecode} from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-oauth2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oauth2.component.html',
})
export class OAuth2Component implements OnInit {
  error = '';
  tokenLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toasterservice:ToastrService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tokenLoading = true;
      const token = params['token'];

      if (token) {
        localStorage.setItem('jwtToken', token);

        try {
          const decoded: any = jwtDecode(token);
          const roles: string[] = decoded.roles || decoded.authorities || [];

          if (roles.includes('MANAGER')) {
            this.router.navigate(['/manager-dashboard']);
          } else if (roles.includes('EMPLOYEE')) {
            this.router.navigate(['/employee-dashboard']);
          } else {
            this.error = 'User role not recognized.';
            localStorage.removeItem('jwtToken');
            this.router.navigate(['/login']);
          }
        } catch (e) {
          this.error = 'Invalid token received.';
          localStorage.removeItem('jwtToken');
          this.router.navigate(['/login']);
        }
      } else if (Object.keys(params).length > 0) {
        this.toasterservice.error('OAuth2 login failed or canceled.');
      }

      this.tokenLoading = false;
    });
  }

  googleLogin() {
    this.document.location.href = 'http://localhost:8081/oauth2/authorization/google';
  }
}
