import { Component } from '@angular/core';
import {
  GanttModule,
  EditService,
  ToolbarService,
  SelectionService,
} from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-gantt',
  standalone: true,
  imports: [GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  template: `
    <ejs-gantt
      [dataSource]="tasks"
      [taskFields]="taskFields"
      [columns]="columns"
      [resources]="resources"
      [resourceIDMapping]="'resourceId'"
      [resourceNameMapping]="'resourceName'"
      [toolbar]="toolbar"
      [editSettings]="editSettings"
      height="600px"
    >
    </ejs-gantt>
  `,
})
export class GantChartComponent{
  // Task data with unique TaskID (id field)
  public tasks = [
    {
      TaskID: 1,
      TaskName: 'Planning',
      StartDate: new Date('2025-06-01'),
      EndDate: new Date('2025-06-05'),
      Progress: 40,
      resourceIds: [1, 2],
    },
    {
      TaskID: 2,
      TaskName: 'Design',
      StartDate: new Date('2025-06-06'),
      EndDate: new Date('2025-06-10'),
      Progress: 60,
      resourceIds: [3],
    },
    {
      TaskID: 3,
      TaskName: 'Development',
      StartDate: new Date('2025-06-11'),
      EndDate: new Date('2025-06-20'),
      Progress: 20,
      resourceIds: [2, 4],
    },
        {
      TaskID: 4,
      TaskName: 'Design for the frontend',
      StartDate: new Date('2025-06-15'),
      EndDate: new Date('2025-06-30'),
      Progress: 60,
      resourceIds: [3],
    },
        {
      TaskID: 5,
      TaskName: 'pipelines',
      StartDate: new Date('2025-06-18'),
      EndDate: new Date('2025-06-25'),
      Progress: 60,
      resourceIds: [3],
    },
  ];

  // Task fields configuration (id required)
  public taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    progress: 'Progress',
    resourceInfo: 'resourceIds',
  };

  // Columns config: Hide the TaskID column
  public columns = [
    { field: 'TaskID', visible: false }, // hide ID column
    { field: 'TaskName', headerText: 'Task Name', width: 250 },
    { field: 'StartDate', headerText: 'Start Date', width: 120, format: 'yMd' },
    { field: 'EndDate', headerText: 'End Date', width: 120, format: 'yMd' },
    { field: 'Progress', headerText: 'Progress (%)', width: 120 },
    { field: 'resourceIds', headerText: 'Resources', width: 150 },
  ];

  // Resources array with resourceId and resourceName
  public resources = [
    { resourceId: 1, resourceName: 'Alice' },
    { resourceId: 2, resourceName: 'Bob' },
    { resourceId: 3, resourceName: 'Charlie' },
    { resourceId: 4, resourceName: 'Diana' },
  ];

  public toolbar: string[] = ['Add'];
  public editSettings = {
    allowAdding: true,
    allowEditing: true,
    mode: 'Dialog',
  };
}
