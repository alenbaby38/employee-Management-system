import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../project.service';
import { CommonModule } from '@angular/common';
import { DetailRowService, EditService, FilterService, GridModule, GroupService, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { CreateProjectComponent } from "../create-project/create-project.component";

@Component({
  selector: 'app-project-details',
  
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css'],
  standalone: true,
  imports: [CommonModule, GridModule, CreateProjectComponent],
  providers:[DetailRowService,PageService, SortService, FilterService, GroupService, ToolbarService, EditService]
})
export class ProjectDetailsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    
    this.projectService.getProjects().subscribe({
      next: data => {
        this.projects = data.map(project => ({
          ...project,
          id: project.id || (project as any)._id || '', // fallback for MongoDB _id
          assignedTo: project.assignedTo ?? [],
          tasks: project.tasks ?? []
        }));
      },
      error: err => console.error('Error fetching projects', err)
    });
  }

  getStatusClass(status: string): string {
    const normalized = status?.toLowerCase();
    switch (normalized) {
      case 'done':
      case 'completed':
        return 'text-success';
      case 'in progress':
        return 'text-warning';
      case 'pending':
      case 'incompleted':
        return 'text-danger';
      default:
        return '';
    }
  }
  
}
