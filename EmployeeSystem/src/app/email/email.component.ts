import { Component } from '@angular/core';
import { Email, EmailService } from '../email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-parser',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  imports:[CommonModule,FormsModule]
})
export class EmailComponent {
rawEmail: string = `Subject: Project Update
Body: The project has been updated.`;
  parsedEmail: Email | null = null;
  errorMessage: string | null = null;
  loading = false;

  constructor(private emailService: EmailService) {}

  parseEmail() {
    this.loading = true;
    this.errorMessage = null;
    this.parsedEmail = null;

    this.emailService.parseEmail(this.rawEmail).subscribe({
      next: (email) => {
        this.parsedEmail = email;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error || 'Failed to parse email.';
        this.loading = false;
      },
    });
  }
}
