import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Email {
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:8081/employee/email/parse';  // Your Spring Boot API endpoint

  constructor(private http: HttpClient) {}

  parseEmail(rawEmail: string): Observable<Email> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.post<Email>(this.apiUrl, rawEmail, { headers });
  }
}
