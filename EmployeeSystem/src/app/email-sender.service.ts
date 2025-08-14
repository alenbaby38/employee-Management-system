import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {
  
 private apiUrl = 'http://localhost:8081/manager/sendemail'; 
  constructor(private http: HttpClient) { }

  sendEmail(emailRequest: EmailRequest): Observable<string> {
  return this.http.post(this.apiUrl, emailRequest, { responseType: 'text' });
}
}
