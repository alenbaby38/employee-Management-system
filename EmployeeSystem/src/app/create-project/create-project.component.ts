import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
interface Task {
  title: string;
  assignedTo: string;
  status: string;
}

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  name = '';
  description = '';
  assignedTo = ''; 
  tasks: Task[] = [];

  message = '';
  error = '';
  loading = false;

  constructor(private http: HttpClient , private toasterService: ToastrService) {}

  addTask() {
    this.tasks.push({ title: '', assignedTo: '', status: 'Pending' });
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  createProject() {
    this.message = '';
    this.error = '';
    if (!this.name.trim()) {
      this.toasterService.warning('project name is required');
      return;
    }

    this.loading = true;

    // Prepare assignedTo as array
    const assignedToArray = this.assignedTo
      .split(',')
      .map(u => u.trim())
      .filter(u => u.length > 0);

    const project = {
      name: this.name,
      description: this.description,
      assignedTo: assignedToArray,
      tasks: this.tasks
    };

    this.http.post('http://localhost:8081/manager/projects', project).subscribe({
      next: (res) => {
        this.loading = false;
     this.toasterService.success('Project created successfully!');
        this.error = '';
        this.name = '';
        this.description = '';
        this.assignedTo = '';
        this.tasks = [];
      },
      error: (err) => {
        this.loading = false;
        if (err.error) {
          if (typeof err.error === 'string') {
            this.error = err.error;
          } else if (err.error.message) {
            this.error = err.error.message;
          } else {
            this.error = JSON.stringify(err.error);
          }
        } else {
          this.toasterService.error('Failed to create project. Please try again.');
        }
      }
    });
  }
}
