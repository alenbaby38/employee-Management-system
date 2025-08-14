import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private flaskApiUrl = 'http://localhost:5000/api/chatbot'; // Your Flask URL

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const token = localStorage.getItem('jwtToken'); // Adjust token key if needed

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<{
      type: string;
      data: boolean; reply: string 
}>(
      this.flaskApiUrl,
      { message },
      { headers }
    );
  }
}
