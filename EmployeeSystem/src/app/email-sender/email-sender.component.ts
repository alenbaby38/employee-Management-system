import { Component } from '@angular/core';
import { EmailRequest, EmailSenderService } from '../email-sender.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-sender',
  imports: [CommonModule,FormsModule],
  templateUrl: './email-sender.component.html',
  styleUrl: './email-sender.component.css'
})
export class EmailSenderComponent {
emailRequest: EmailRequest = {
    to: '',
    subject: '',
    body: ''
  };

  message = '';
   constructor(private emailService: EmailSenderService) {}
   sendEmail() {
    this.emailService.sendEmail(this.emailRequest).subscribe({
      next: (response) => {
        this.message = 'Email sent successfully!';
        this.emailRequest = { to: '', subject: '', body: '' }; 
      },
      error: (error) => {
        this.message = 'Failed to send email: ' + error.message;
      }
    });
  }
}

