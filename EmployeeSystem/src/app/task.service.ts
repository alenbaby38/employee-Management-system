import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8081/manager/tasks'; 

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }
}

export interface Task {
  id?: string;
  title: string;
  assignedTo: string;
  status: string;
}
  


