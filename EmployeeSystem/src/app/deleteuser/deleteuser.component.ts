import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deleteuser',
  imports: [],
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.css'
})
export class DeleteuserComponent implements OnInit {
  user:any;
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
        error: err =>   this.toasterservice.error('Failed to load user.')
      });
    }this.deleteUser();
  }

   deleteUser() {
  this.http.delete(`http://localhost:8081/manager/deleteUser/${this.user.username}`).subscribe({
    next: () => {
       this.toasterservice.success("user deleted successfully");
      this.router.navigate(['/employeelist']);
    },
    error: err => alert('Failed to delete user.')
  });
}dontDeleteUser() {
 
      this.router.navigate(['/employeelist']);
}
}
