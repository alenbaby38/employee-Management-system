import { Component, OnInit } from '@angular/core';
import { jwtDecode }from 'jwt-decode';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MatIcon } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,MatIcon],
 
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  role: string | null = null;
  title = "ems";
  isToggled: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.setRoleFromToken();

   // this.router.events
     // .pipe(filter(event => event instanceof NavigationEnd))
     // .subscribe(() => {
      //  this.setRoleFromToken();
     // });
  }

  setRoleFromToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      this.role = null;
      return;
    }

    try {
      const decoded: any = jwtDecode(token);
      const roles: string[] = decoded.roles || decoded.authorities || [];

      if (roles.includes('MANAGER')) {
        this.role = 'MANAGER';
      } else if (roles.includes('EMPLOYEE')) {
        this.role = 'EMPLOYEE';
      } else {
        this.role = null;
      }
    } catch {
      localStorage.removeItem('jwtToken');
      this.role = null;
    }
  }
toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
}
