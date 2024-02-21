import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    AddUserComponent,
    ListUserComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
