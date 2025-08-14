import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
 
  constructor(private router: Router , private auth:AuthService) {}
  ngOnInit() {

  localStorage.removeItem('token');
  this.router.navigate(['/login']);
   this.auth.logout();
}

}
