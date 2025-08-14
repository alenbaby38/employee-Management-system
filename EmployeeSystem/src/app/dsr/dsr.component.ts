import { Component } from '@angular/core';
import { DsrService } from '../dsr.service';
import { CommonModule } from '@angular/common';
import { DSR } from '../models/dsr';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dsr',
  imports: [CommonModule,FormsModule],
  templateUrl: './dsr.component.html',
  styleUrl: './dsr.component.css'
})
export class DsrComponent {
dsr: DSR = { entries: [] };
  taskIdInput = '';
  minutesInput = 0;
  errorMessage = '';
  successMessage = '';
totalTimeSpent=0;

  constructor(private dsrService: DsrService , private toasterservice: ToastrService) {}

  addEntry() {
    if (!this.taskIdInput || this.minutesInput <= 0) {
         this.toasterservice.error('Task ID and minutes are required.');
      return;
    }

    this.dsr.entries.push({
      taskId: this.taskIdInput,
      minutesSpent: this.minutesInput
    });

    this.taskIdInput = '';
    this.minutesInput = 0;
    this.errorMessage = '';
    this.totalTimeSpent = this.dsr.entries.reduce((sum, entry) => sum + entry.minutesSpent, 0);
  }

  submitDSR() {
    this.dsrService.submitDSR(this.dsr).subscribe({
      next: () => {
        this.toasterservice.success( 'DSR submitted successfully!');
        this.dsr.entries = [];
      },
      error: err => {
        this.toasterservice.error('Failed to create project. Please try again.');
      }
    });
  }
}
