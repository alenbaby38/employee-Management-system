import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  user: any = {};
 constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private toasterservice: ToastrService
  ) {}
    
  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.http.get(`http://localhost:8081/manager/getUser/${username}`).subscribe({
        next: data => this.user = data,
        error: err =>    this.toasterservice.error('Failed to load user.')
      });
    }
  }
  updateUser() {
    this.http.put(`http://localhost:8081/manager/editUser/${this.user.username}`, this.user).subscribe({
      next: () => {
        alert('User updated successfully!');
        this.router.navigate(['/employeelist']);
      },
      error: err => this.toasterservice.error('Failed to update user.')
    });
  }
}

