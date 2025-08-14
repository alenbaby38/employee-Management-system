import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DsrService } from '../dsr.service';
import { DSR } from '../models/dsr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewdsr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './viewdsr.component.html',
  styleUrls: ['./viewdsr.component.css']
})
export class ViewDsrComponent {
  username: string = '';
  dsrs: DSR[] = [];
  error: string = '';

  constructor(
    private dsrService: DsrService,
    private route: ActivatedRoute,
    private router: Router,
    private toasterservice:ToastrService
  ) {
    this.route.paramMap.subscribe(params => {
      const user = params.get('username');
      if (user) {
        this.username = user;
        this.fetchDSRs();
      }
    });
  }

  fetchDSRs() {
    if (!this.username) return;

    this.dsrService.getDSRsByUsername(this.username).subscribe({
      next: (data) => {
        this.dsrs = data;
        this.error = '';
      },
      error: (err) => {
        this.toasterservice.error('DSRs not found for the specified user.');
        this.dsrs = [];
      }
    });
  }

  goToUserDSR() {
    if (this.username.trim()) {
      this.router.navigate(['/viewdsr', this.username.trim()]);
    }
  }
}
