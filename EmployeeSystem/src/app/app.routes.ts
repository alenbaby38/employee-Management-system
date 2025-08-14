import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { OAuth2Component } from './components/oauth2/oauth2.component';

import { AuthGuard } from './guards/auth.guard';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { DsrComponent } from './dsr/dsr.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewDsrComponent } from './viewdsr/viewdsr.component';
import { EmailComponent } from './email/email.component';
import { ExcelComponent } from './excel/excel.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './projectlist/projectlist.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { PivotexComponent } from './pivotex/pivotex.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { GantChartComponent } from './ganttchart/ganttchart.component';
import { EmailSenderComponent } from './email-sender/email-sender.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'oauth2', component: OAuth2Component },
    { path: 'logout', component: LogoutComponent },

  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE'] }
  },
  {
    path: 'email-sender',
    component: EmailSenderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
  {
    path: 'manager-dashboard',
    component: ManagerDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
  {
    path: 'sheet',
    component: SpreadsheetComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
    {
    path: 'gantt',
    component: GantChartComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
    {
    path: 'pivot',
    component: PivotexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
    {
    path: 'edit-user/:username',
    component: EditUserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
  {
    path: 'deleteuser/:username',
    component: DeleteuserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
  {
    path: 'employeelist',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
    {
    path: 'createproject',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
   {
    path: 'DSR',
    component: DsrComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE'] }
  },
  {
    path: 'email',
    component: EmailComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE'] }
  },
{
  path: 'excel',
  component: ExcelComponent,
  canActivate: [AuthGuard],
  data: { roles: ['EMPLOYEE', 'MANAGER'] }
},
    {
    path: 'viewdsr',
    component: ViewDsrComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
      {
    path: 'projectlist',
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER'] }
  },
  {
  path: 'viewdsr/:username',
  component: ViewDsrComponent,
  data: { roles: ['MANAGER']}
},

   {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE','MANAGER'] }
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
