import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, AccumulationLegendService, FunnelSeriesService } from '@syncfusion/ej2-angular-charts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, StackingBarSeriesService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ChatbotComponent } from "../../chatbot/chatbot.component";
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [ChatbotComponent,CommonModule,MatCardModule, FormsModule, DashboardLayoutModule, AccumulationChartModule, ChartModule, RouterModule, ChatbotComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css'],
  providers: [
    CategoryService,
    StackingBarSeriesService,
    LegendService,
    TooltipService,
    PieSeriesService,
    AccumulationDataLabelService,
    AccumulationLegendService,
    FunnelSeriesService,RouterLink,RouterOutlet,RouterModule
  ]
})
export class ManagerDashboardComponent implements OnInit {
  employeeCount = 0;
  managerCount = 0;
  normalEmployeeCount = 0;
  taskCompletedCount = 0;
  taskInCompletedCount = 0;
  employees: any[] = [];
  error = '';
  loading = false;
 topemployees:any[]=[];
  pieChartDataTasks: any[] = [];

  stackedBarData: Object[] = [];
  stackedBarPrimaryXAxis: Object = {
    valueType: 'Category',
    labelIntersectAction: 'Rotate45',
    majorGridLines: { width: 0 },
  };
  stackedBarPrimaryYAxis: Object = {
    labelFormat: '{value}',
    majorGridLines: { width: 0 },
  };
  stackedBarTitle = 'Completed vs Incomplete Tasks';

  legendSettings: Object = { visible: true };
  tooltip: Object = { enable: true };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.fetchEmployeeCount();
    this.fetchTaskCounts();
    this.fetchTopEmployees();
  }

  fetchEmployeeCount(): void {
    this.http.get<any[]>('http://localhost:8081/manager/employees').subscribe({
      next: (employees) => {
        this.employees = employees;
        this.employeeCount = employees.length;
        this.managerCount = employees.filter(emp => emp.role === 'MANAGER').length;
        this.normalEmployeeCount = employees.filter(emp => emp.role === 'EMPLOYEE').length;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch employee data.';
        this.loading = false;
      }
    });
  }
  fetchTopEmployees(): void{
this.http.get<any[]>('http://localhost:8081/manager/topemployees').subscribe({
  next: (employees) =>{
    this.topemployees = employees;
  
  },  error: (err) => {
      console.error('Error fetching top employees:', err);
    }
})
  }

  fetchTaskCounts(): void {
    // Parallel request for completed and incomplete tasks
    const completed$ = this.http.get<number>('http://localhost:8081/manager/Employees/taskcompletedcount');
    const incomplete$ = this.http.get<number>('http://localhost:8081/manager/Employees/taskincompletedcount');

    completed$.subscribe({
      next: (completed) => {
        this.taskCompletedCount = completed;
        this.updateCharts();
      },
      error: () => {
        this.error = 'Failed to fetch completed task count.';
      }
    });

    incomplete$.subscribe({
      next: (incomplete) => {
        this.taskInCompletedCount = incomplete;
        this.updateCharts();
      },
      error: () => {
        this.error = 'Failed to fetch incomplete task count.';
      }
    });
  }

  updateCharts(): void {
    this.pieChartDataTasks = [
      { x: 'Completed', y: this.taskCompletedCount ,color: '#4ABFE9' },
      { x: 'Incomplete', y: this.taskInCompletedCount, color: '#E23739'}
    ];

    this.stackedBarData = [
      {
        x: 'Tasks',
        completed: this.taskCompletedCount,
        incomplete: this.taskInCompletedCount
      }
    ];
  }
}
