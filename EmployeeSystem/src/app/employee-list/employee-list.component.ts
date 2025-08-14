import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterService, GridModule, GroupService, PageService, PageSettingsModel, SortService, EditService, ToolbarService, ToolbarItem } from '@syncfusion/ej2-angular-grids';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { GroupSettingsModel } from '@syncfusion/ej2-angular-grids';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, GridModule, PivotViewModule],
  providers: [PageService, SortService, FilterService, GroupService, ToolbarService, EditService],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {

  public groupsetting: GroupSettingsModel = {
    columns:['role']
    //showDropArea:false
  }
 
  public pageSettings: PageSettingsModel = {
    pageSize: 7
  };
  public editSettings = {
    allowEditing: true,
    allowDeleting: true,
    allowAdding: false,
    mode: 'Normal' // 'Normal' requires row selection to edit
  };
  public toolbar:String[] = ['Edit', 'Delete', 'Update', 'Cancel']; 

  employees: any[] = [];
  error = '';
  loading = false;
filterOptions: FilterSettingsModel ={ignoreAccent:true,
  type:"FilterBar"
};

  constructor(private http: HttpClient,private toasterservice:ToastrService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:8081/manager/employees').subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load employees.';
        this.loading = false;
      }
    });
  }

  onActionBegin(args: any) {
    if (args.requestType === 'save') {
      const updatedUser = args.data;
      this.http.put(`http://localhost:8081/manager/editUser/${updatedUser.username}`, updatedUser)
        .subscribe({
          next: () => {
             this.toasterservice.success('User updated successfully!');
            this.fetchEmployees();  // Refresh after update
          },
          error: () => alert('Failed to update user.')
        });
    }

    if (args.requestType === 'delete') {
      const username = args.data[0].username;
      this.http.delete(`http://localhost:8081/manager/deleteUser/${username}`)
        .subscribe({
          next: () => {
              this.toasterservice.success("user deleted successfully");
            this.fetchEmployees();  // Refresh after delete
          },
          error: () => alert('Failed to delete user.')
        });
    }
  }
}
