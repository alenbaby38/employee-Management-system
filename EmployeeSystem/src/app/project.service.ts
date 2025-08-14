import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8081/manager/projects'; // Your backend URL

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }
}

export interface Task {
  id?: string;
  title: string;
  assignedTo: string;
  status: string;
}

export interface Project {
  id?: string;     // mapped id
  _id?: string;    // original MongoDB id
  name: string;
  description: string;
  assignedTo: string[];
  tasks: Task[];
}

